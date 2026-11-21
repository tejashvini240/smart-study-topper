import { Mic, MicOff, Send, Volume2, X, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Language } from "../types";
import { tText, UI_STRINGS } from "../data/translations";

interface VoiceAssistantProps {
  language: Language;
  contextLabel?: string;
  externalPromptTrigger?: { id: number; prompt: string } | null;
}

interface ChatTurn {
  role: "user" | "assistant";
  text: string;
}

interface SpeechRecognitionEventLike {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}

interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

export function VoiceAssistant({
  language,
  contextLabel,
  externalPromptTrigger,
}: VoiceAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const stopSpeech = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const speakResponse = async (text: string) => {
    stopSpeech();
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language }),
      });
      if (!res.ok) throw new Error("TTS fallback");
      const data = await res.json();
      if (!data.audioBase64) throw new Error("No audio");
      const audio = new Audio(`data:audio/wav;base64,${data.audioBase64}`);
      audioRef.current = audio;
      audio.onended = () => setIsSpeaking(false);
      setIsSpeaking(true);
      await audio.play();
    } catch {
      if ("speechSynthesis" in window) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = language === "te" ? "te-IN" : language === "hi" ? "hi-IN" : "en-IN";
        utter.onend = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utter);
      }
    }
  };

  const askTutor = async (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;

    setErrorMsg(null);
    setTurns((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    try {
      const res = await fetch("/api/voice-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          language,
          context: contextLabel ?? "",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.answer) {
        throw new Error(data.error || "Unable to reach Voice Tutor.");
      }

      setTurns((prev) => [...prev, { role: "assistant", text: data.answer }]);
      await speakResponse(data.answer);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Voice assistant error.";
      setErrorMsg(msg);
    } finally {
      setIsThinking(false);
    }
  };

  // Triggered externally from Lesson page "Explain Lesson by Voice" button
  useEffect(() => {
    if (externalPromptTrigger?.prompt) {
      setIsOpen(true);
      askTutor(externalPromptTrigger.prompt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalPromptTrigger?.id]);

  const startVoiceCapture = async () => {
    if (isListening) {
      recognitionRef.current?.stop();
      mediaRecorderRef.current?.stop();
      setIsListening(false);
      return;
    }

    setErrorMsg(null);
    const win = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        recognitionRef.current = rec;
        rec.lang = language === "te" ? "te-IN" : language === "hi" ? "hi-IN" : "en-IN";
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        setIsListening(true);

        rec.onresult = (event) => {
          const transcript = event.results?.[0]?.[0]?.transcript ?? "";
          setIsListening(false);
          if (transcript) {
            askTutor(transcript);
          }
        };
        rec.onerror = () => {
          setIsListening(false);
          setErrorMsg("Could not hear clearly. Please try again or type your doubt.");
        };
        rec.onend = () => setIsListening(false);
        rec.start();
        return;
      } catch {
        setIsListening(false);
      }
    }

    // Fallback: MediaRecorder + Gemini /api/transcribe
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      const chunks: BlobPart[] = [];
      setIsListening(true);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        setIsListening(false);
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: "audio/webm" });
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = String(reader.result ?? "").split(",")[1];
          if (!base64) return;
          setIsThinking(true);
          try {
            const res = await fetch("/api/transcribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ audioBase64: base64, mimeType: "audio/webm", language }),
            });
            const data = await res.json();
            if (data.text) {
              await askTutor(data.text);
            }
          } catch {
            setErrorMsg("Audio transcription failed. Please type your doubt.");
          } finally {
            setIsThinking(false);
          }
        };
        reader.readAsDataURL(blob);
      };

      recorder.start();
      setTimeout(() => {
        if (recorder.state === "recording") recorder.stop();
      }, 6000);
    } catch {
      setIsListening(false);
      setErrorMsg("Microphone permission is needed to speak. You can also type below.");
    }
  };

  return (
    <div className="no-print">
      {/* Persistent Mic Floating Action Button on ALL pages */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={tText(UI_STRINGS.voiceAssistantTitle, language)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-transform active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        <Mic className="w-5 h-5" aria-hidden="true" />
        <span className="text-xs font-semibold hidden sm:inline whitespace-nowrap">
          {language === "te" ? "మైక్ సందేహం" : language === "hi" ? "वॉइस ट्यूटर" : "Voice Tutor"}
        </span>
      </button>

      {/* Voice Doubt Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold">
                {tText(UI_STRINGS.voiceAssistantTitle, language)}
              </h3>
              <p className="text-xs text-blue-100">
                {language === "te" ? "తెలుగు · हिन्दी · English" : language === "hi" ? "हिन्दी · తెలుగు · English" : "English · తెలుగు · हिन्दी"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {isSpeaking && (
                <button
                  type="button"
                  onClick={stopSpeech}
                  aria-label="Stop Speaking"
                  className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Voice Assistant"
                className="p-1.5 rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-slate-50 min-h-[200px]">
            {turns.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-900">
                  {tText(UI_STRINGS.voicePromptHint, language)}
                </p>
                {contextLabel && (
                  <button
                    type="button"
                    onClick={() =>
                      askTutor(
                        language === "te"
                          ? `${contextLabel} పాఠాన్ని సులభంగా వివరించండి.`
                          : language === "hi"
                          ? `${contextLabel} पाठ को सरल भाषा में समझाएं।`
                          : `Explain the chapter "${contextLabel}" simply for my exam.`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{tText(UI_STRINGS.explainByVoice, language)}</span>
                  </button>
                )}
              </div>
            )}

            {turns.map((turn, idx) => (
              <div
                key={idx}
                className={`rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  turn.role === "user"
                    ? "bg-blue-600 text-white ml-8"
                    : "bg-white border border-slate-200 text-slate-800 mr-4"
                }`}
              >
                <p>{turn.text}</p>
                {turn.role === "assistant" && (
                  <button
                    type="button"
                    onClick={() => speakResponse(turn.text)}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>
                      {language === "te" ? "మళ్ళీ వినండి" : language === "hi" ? "फिर सुनें" : "Play Voice"}
                    </span>
                  </button>
                )}
              </div>
            ))}

            {isThinking && (
              <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-500 mr-8">
                {language === "te"
                  ? "సమాధానం సిద్ధమవుతోంది..."
                  : language === "hi"
                  ? "उत्तर तैयार हो रहा है..."
                  : "Preparing textbook answer..."}
              </div>
            )}

            {errorMsg && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {errorMsg}
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <button
              type="button"
              onClick={startVoiceCapture}
              aria-label="Speak Doubt"
              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                isListening
                  ? "bg-red-600 text-white"
                  : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") askTutor(input);
              }}
              placeholder={
                isListening
                  ? tText(UI_STRINGS.listeningLabel, language)
                  : language === "te"
                  ? "మీ సందేహం టైప్ చేయండి..."
                  : language === "hi"
                  ? "अपना सवाल लिखें..."
                  : "Ask any textbook doubt..."
              }
              className="flex-1 min-w-0 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="button"
              onClick={() => askTutor(input)}
              disabled={isThinking || !input.trim()}
              aria-label="Send Doubt"
              className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
