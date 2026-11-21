import { ExternalLink, Play, Volume2, VolumeX, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { DiagramType, Language, LocalizedText } from "../types";

interface LessonVideoPlayerProps {
  title: string;
  subtitle: string;
  diagramType?: DiagramType;
  keyPoints?: LocalizedText[];
  notesText: string;
  language: Language;
  durationMin?: number;
  searchQuery?: string;
}

// Verified YouTube video IDs for flagship chapters; all other chapters resolve via /api/youtube-search
const VERIFIED_CHAPTER_VIDEOS: Record<string, { videoId: string; title: string; author: string }> = {
  "Quadratic Equations": {
    videoId: "hayFtYnAB-Q",
    title: "Quadratic Equations Class 10 Maths Full Chapter",
    author: "NCERT / State Board",
  },
};

export function LessonVideoPlayer({
  title,
  subtitle,
  notesText,
  language,
  searchQuery,
}: LessonVideoPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const queryText = searchQuery || `${title} ${subtitle} TS SCERT NCERT lesson`;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    queryText
  )}`;

  const [videoId, setVideoId] = useState<string | null>(
    VERIFIED_CHAPTER_VIDEOS[title]?.videoId ?? null
  );
  const [videoTitle, setVideoTitle] = useState<string>(
    VERIFIED_CHAPTER_VIDEOS[title]?.title ?? title
  );
  const [videoAuthor, setVideoAuthor] = useState<string>(
    VERIFIED_CHAPTER_VIDEOS[title]?.author ?? subtitle
  );
  const [resolvedUrl, setResolvedUrl] = useState<string>(youtubeSearchUrl);
  const [loadingVideo, setLoadingVideo] = useState<boolean>(false);
  const [isIframeActive, setIsIframeActive] = useState<boolean>(false);
  const [thumbFailed, setThumbFailed] = useState<boolean>(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ttsLoading, setTtsLoading] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsIframeActive(false);
    setThumbFailed(false);
    setResolvedUrl(youtubeSearchUrl);

    const curated = VERIFIED_CHAPTER_VIDEOS[title];
    if (curated) {
      setVideoId(curated.videoId);
      setVideoTitle(curated.title);
      setVideoAuthor(curated.author);
      setLoadingVideo(false);
      return;
    }

    setVideoId(null);
    setVideoTitle(title);
    setVideoAuthor(subtitle);
    setLoadingVideo(true);

    fetch(`/api/youtube-search?q=${encodeURIComponent(queryText)}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (data?.videoId) {
          setVideoId(data.videoId);
          setVideoTitle(data.title || title);
          setVideoAuthor(data.author || subtitle);
        } else {
          setVideoId(null);
        }
        if (data?.searchUrl) {
          setResolvedUrl(data.searchUrl);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setVideoId(null);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoadingVideo(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [title, subtitle, queryText, youtubeSearchUrl]);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => stopAudio();
  }, [title, language]);

  const handleVoiceNarration = async () => {
    if (isSpeaking) {
      stopAudio();
      return;
    }

    setAudioError(null);
    setTtsLoading(true);
    const script = `${title}. ${notesText}`;

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: script, language }),
      });

      if (!res.ok) throw new Error("Voice stream fallback");

      const data = await res.json();
      if (!data.audioBase64) throw new Error("Missing audio payload");

      const audio = new Audio(`data:audio/wav;base64,${data.audioBase64}`);
      audioRef.current = audio;
      audio.onended = () => setIsSpeaking(false);
      audio.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      await audio.play();
    } catch {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(script);
        utter.lang = language === "te" ? "te-IN" : language === "hi" ? "hi-IN" : "en-IN";
        utter.rate = 0.96;
        utter.onend = () => setIsSpeaking(false);
        utter.onerror = () => {
          setIsSpeaking(false);
          setAudioError("Audio playback is not supported on this device.");
        };
        setIsSpeaking(true);
        window.speechSynthesis.speak(utter);
      } else {
        setAudioError("Audio playback could not be initialized.");
      }
    } finally {
      setTtsLoading(false);
    }
  };

  const watchOnYoutubeLabel =
    language === "te"
      ? "YouTube లో చూడండి"
      : language === "hi"
      ? "YouTube पर देखें"
      : "Watch on YouTube";

  const playVideoLabel =
    language === "te"
      ? "వీడియో ప్లే చేయండి"
      : language === "hi"
      ? "वीडियो चलाएं"
      : "Play Lesson Video";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* 16:9 Real YouTube Video Stage */}
      <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
        {loadingVideo ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 text-center gap-3">
            <Youtube className="w-10 h-10 text-blue-300" />
            <p className="text-sm font-semibold">
              {language === "te"
                ? `"${title}" కోసం YouTube పాఠం వీడియోను వెతుకుతోంది...`
                : language === "hi"
                ? `"${title}" के लिए YouTube पाठ वीडियो खोजा जा रहा है...`
                : `Finding YouTube lesson video for "${title}"...`}
            </p>
          </div>
        ) : videoId && isIframeActive ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : videoId ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {!thumbFailed ? (
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={videoTitle}
                referrerPolicy="no-referrer"
                onError={() => setThumbFailed(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/25 flex flex-col items-center justify-center p-6 text-center gap-4">
              <div className="max-w-xl space-y-1">
                <p className="text-xs font-semibold text-blue-200">
                  {videoAuthor} · {subtitle}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2">
                  {videoTitle}
                </h3>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsIframeActive(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 shadow-lg transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{playVideoLabel}</span>
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/95 text-slate-900 text-sm font-semibold hover:bg-white transition-colors whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span>{watchOnYoutubeLabel}</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Fallback when no embeddable video is found */
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <Youtube className="w-7 h-7" />
            </div>
            <div className="max-w-lg space-y-1.5">
              <p className="text-xs font-semibold text-blue-200">{subtitle}</p>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === "te"
                  ? "ఈ పాఠం వీడియోను YouTube లో నేరుగా చూడటానికి క్రింది బటన్ నొక్కండి."
                  : language === "hi"
                  ? "इस अध्याय का वीडियो सीधे YouTube पर देखने के लिए नीचे दिए गए बटन पर क्लिक करें।"
                  : "Open YouTube search directly for this exact textbook chapter lesson video."}
              </p>
            </div>
            <a
              href={resolvedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 shadow-lg transition-colors whitespace-nowrap"
            >
              <Youtube className="w-4 h-4" />
              <span>{watchOnYoutubeLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Control Strip: Play / Watch on YouTube / Voice Narration */}
      <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {videoId && !isIframeActive && (
            <button
              type="button"
              onClick={() => setIsIframeActive(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{playVideoLabel}</span>
            </button>
          )}

          <a
            href={resolvedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            <span>{watchOnYoutubeLabel}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={handleVoiceNarration}
          disabled={ttsLoading}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
            isSpeaking
              ? "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
              : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
          }`}
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span>
            {ttsLoading
              ? language === "te"
                ? "వాయిస్ లోడ్ అవుతోంది..."
                : language === "hi"
                ? "आवाज़ तैयार हो रही है..."
                : "Preparing Voice..."
              : isSpeaking
              ? language === "te"
                ? "వాయిస్ ఆపండి"
                : language === "hi"
                ? "आवाज़ रोकें"
                : "Stop Voice"
              : language === "te"
              ? "వాయిస్‌తో పాఠం వినండి"
              : language === "hi"
              ? "आवाज़ में पाठ सुनें"
              : "Listen to Lesson Voice"}
          </span>
        </button>

        {audioError && <p className="w-full text-xs text-red-600">{audioError}</p>}
      </div>
    </div>
  );
}
