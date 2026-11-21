import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function getLanguageName(langCode: string): string {
  if (langCode === "te") return "Telugu (తెలుగు)";
  if (langCode === "hi") return "Hindi (हिन्दी)";
  return "English";
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "15mb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Smart Study Topper" });
  });

  // Voice Assistant & Lesson Explainer Endpoint
  app.post("/api/voice-assistant", async (req, res) => {
    try {
      const { question, language = "en", context = "" } = req.body ?? {};
      if (!question || typeof question !== "string") {
        res.status(400).json({ error: "Please provide a valid question." });
        return;
      }

      const ai = getGeminiClient();
      const targetLanguage = getLanguageName(language);

      const systemInstruction = [
        `You are the Smart Study Topper Voice Tutor for Indian students studying TS SCERT (Telangana State Board including Singidi Telugu), TSBIE Intermediate, NCERT, NEET, JEE, UPSC, and TSPSC Groups.`,
        `Always respond strictly in ${targetLanguage}.`,
        `Use clear, spoken-friendly academic sentences suitable for reading aloud to a student. Avoid markdown symbols like ** or ### or bullet asterisks so Text-to-Speech sounds natural.`,
        `Keep answers concise (4-6 clear sentences), accurate to TS SCERT and NCERT textbooks, and encouraging.`,
      ].join(" ");

      const prompt = context
        ? `Student Context: ${context}\n\nStudent Question: ${question}`
        : `Student Question: ${question}`;

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: prompt,
        config: {
          systemInstruction,
        },
      });

      const answer = response.text?.trim();
      if (!answer) {
        res.status(502).json({ error: "No response text received from tutor." });
        return;
      }

      res.json({ answer, language });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to generate tutor response.";
      console.error("Voice assistant error:", message);
      res.status(500).json({ error: message });
    }
  });

  // Audio Transcription Endpoint (fallback for browsers without Web Speech API)
  app.post("/api/transcribe", async (req, res) => {
    try {
      const { audioBase64, mimeType = "audio/webm", language = "en" } = req.body ?? {};
      if (!audioBase64 || typeof audioBase64 !== "string") {
        res.status(400).json({ error: "Missing audio data." });
        return;
      }

      const ai = getGeminiClient();
      const targetLanguage = getLanguageName(language);

      const response = await ai.models.generateContent({
        model: "gemini-3.5-transcribe",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType,
                data: audioBase64,
              },
            },
            {
              text: `Transcribe this student's spoken question accurately in ${targetLanguage} (or the spoken language). Return only the transcribed text.`,
            },
          ],
        },
      });

      res.json({ text: (response.text ?? "").trim() });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Audio transcription failed.";
      console.error("Transcription error:", message);
      res.status(500).json({ error: message });
    }
  });

  // Text-to-Speech Endpoint using Gemini 3.8 Flash Lite TTS
  app.post("/api/tts", async (req, res) => {
    try {
      const { text, language = "en" } = req.body ?? {};
      if (!text || typeof text !== "string") {
        res.status(400).json({ error: "Text is required for speech generation." });
        return;
      }

      const ai = getGeminiClient();
      const targetLanguage = getLanguageName(language);
      const clipped = text.slice(0, 1200);

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash-lite-tts",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: clipped,
                speechMetadata: {
                  style: `Warm, clear, encouraging Indian school teacher speaking in ${targetLanguage}`,
                },
              },
            ],
          },
        ],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Kore" },
            },
          },
        },
      });

      const audioBase64 =
        response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!audioBase64) {
        res.status(502).json({ error: "Audio data could not be generated." });
        return;
      }

      res.json({ audioBase64, mimeType: "audio/wav" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Speech synthesis failed.";
      console.error("TTS error:", message);
      res.status(500).json({ error: message });
    }
  });

  // Dynamic Textbook 10-MCQ Generator for any specific Class / Subject / Lesson
  app.post("/api/generate-lesson-quiz", async (req, res) => {
    try {
      const { classTitle, subjectTitle, lessonTitle, language = "en" } = req.body ?? {};
      if (!classTitle || !subjectTitle || !lessonTitle) {
        res.status(400).json({ error: "classTitle, subjectTitle, and lessonTitle are required." });
        return;
      }

      const ai = getGeminiClient();
      const targetLanguage = getLanguageName(language);

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: `Generate exactly 10 high-quality multiple-choice questions strictly based on the TS SCERT / NCERT textbook chapter:
Class: ${classTitle}
Subject: ${subjectTitle}
Chapter: ${lessonTitle}
Language: ${targetLanguage} (write all questions, 4 options, and explanations in ${targetLanguage}).`,
        config: {
          systemInstruction:
            "You are an expert Indian TS SCERT and NCERT textbook exam paper setter. Every MCQ must have 4 options, 1 correct index (0-3), and a clear textbook explanation.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                correctIndex: { type: Type.INTEGER },
                explanation: { type: Type.STRING },
              },
              required: ["question", "options", "correctIndex", "explanation"],
            },
          },
        },
      });

      const raw = (response.text ?? "[]").trim();
      const parsed = JSON.parse(raw);
      res.json({ questions: Array.isArray(parsed) ? parsed.slice(0, 10) : [] });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Quiz generation failed.";
      console.error("Quiz generation error:", message);
      res.status(500).json({ error: message });
    }
  });

  // YouTube Lesson Video Resolver with oEmbed Verification & Search Fallback
  const youtubeCache = new Map<
    string,
    { videoId: string | null; title?: string; author?: string }
  >();

  app.get("/api/youtube-search", async (req, res) => {
    const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      q || "TS SCERT NCERT lesson"
    )}`;

    if (!q) {
      res.json({ videoId: null, searchUrl });
      return;
    }

    const cached = youtubeCache.get(q);
    if (cached) {
      res.json({ ...cached, searchUrl });
      return;
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4500);
      const ytRes = await fetch(searchUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!ytRes.ok) {
        youtubeCache.set(q, { videoId: null });
        res.json({ videoId: null, searchUrl });
        return;
      }

      const html = await ytRes.text();
      const matches = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)];
      const candidates: string[] = [];
      for (const m of matches) {
        if (m[1] && !candidates.includes(m[1])) {
          candidates.push(m[1]);
        }
        if (candidates.length >= 4) break;
      }

      for (const id of candidates) {
        try {
          const oembedCtrl = new AbortController();
          const oembedTimer = setTimeout(() => oembedCtrl.abort(), 2500);
          const oembedRes = await fetch(
            `https://www.youtube.com/oembed?url=${encodeURIComponent(
              `https://www.youtube.com/watch?v=${id}`
            )}&format=json`,
            { signal: oembedCtrl.signal }
          );
          clearTimeout(oembedTimer);

          if (oembedRes.ok) {
            const info = (await oembedRes.json()) as {
              title?: string;
              author_name?: string;
            };
            const payload = {
              videoId: id,
              title: info.title,
              author: info.author_name,
            };
            youtubeCache.set(q, payload);
            res.json({ ...payload, searchUrl });
            return;
          }
        } catch {
          // Try next candidate
        }
      }

      youtubeCache.set(q, { videoId: null });
      res.json({ videoId: null, searchUrl });
    } catch {
      res.json({ videoId: null, searchUrl });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("/{*path}", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Study Topper server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
