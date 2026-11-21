import { ArrowRight, Check, Lock, User } from "lucide-react";
import { useEffect, useState } from "react";
import type { Language } from "../types";
import { tText, UI_STRINGS } from "../data/translations";
import { BrandLogo } from "../components/BrandLogo";

interface LanguageSelectPageProps {
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onContinue: () => void;
}

export function LanguageSelectPage({
  language,
  onSelectLanguage,
  onContinue,
}: LanguageSelectPageProps) {
  const options: Array<{ code: Language; native: string; label: string; desc: string }> = [
    {
      code: "te",
      native: "తెలుగు",
      label: "Telugu",
      desc: "TS SCERT సింగిడి తెలుగు, ఇంటర్, NEET, JEE, గ్రూప్స్",
    },
    {
      code: "hi",
      native: "हिन्दी",
      label: "Hindi",
      desc: "TS SCERT और NCERT कक्षा 6-12, NEET, JEE, UPSC",
    },
    {
      code: "en",
      native: "English",
      label: "English",
      desc: "TS SCERT & NCERT Complete Textbooks, Quizzes & Career",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <BrandLogo size="sm" language={language} />
          <span className="text-xs font-medium text-slate-500">
            TS SCERT &amp; NCERT
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <p className="text-xs font-semibold text-blue-700 mb-2">
              {tText(UI_STRINGS.tagline, language)}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {tText(UI_STRINGS.selectLanguageTitle, language)}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {tText(UI_STRINGS.selectLanguageDesc, language)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {options.map((opt) => {
              const selected = language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => onSelectLanguage(opt.code)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    selected
                      ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                      : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-slate-900">
                      {opt.native}
                    </span>
                    {selected && (
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-blue-700 mb-1">
                    {opt.label}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onContinue}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{tText(UI_STRINGS.continueBtn, language)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

interface SplashPageProps {
  language: Language;
  onFinish: () => void;
}

export function SplashPage({ language, onFinish }: SplashPageProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 flex flex-col">
      <header className="px-6 py-4 flex items-center justify-between max-w-5xl w-full mx-auto">
        <BrandLogo size="sm" language={language} />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 sm:p-14 shadow-sm max-w-lg w-full flex flex-col items-center">
          <BrandLogo size="lg" language={language} />

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-sm">
            {tText(UI_STRINGS.splashWelcome, language)}
          </p>

          <div className="w-full max-w-xs h-1.5 bg-slate-100 rounded-full overflow-hidden mt-8">
            <div className="h-full bg-blue-600 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] w-3/4" />
          </div>

          <button
            type="button"
            onClick={onFinish}
            className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <span>{tText(UI_STRINGS.enterApp, language)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}

interface LoginPageProps {
  language: Language;
  onLogin: (username: string) => void;
  onChangeLanguage: () => void;
}

export function LoginPage({
  language,
  onLogin,
  onChangeLanguage,
}: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError(
        language === "te"
          ? "దయచేసి యూజర్ నేమ్ మరియు పాస్‌వర్డ్ నమోదు చేయండి."
          : language === "hi"
          ? "कृपया यूज़रनेम और पासवर्ड दर्ज करें।"
          : "Please enter both username and password."
      );
      return;
    }
    setError(null);
    onLogin(username.trim());
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <BrandLogo size="sm" language={language} />
          <button
            type="button"
            onClick={onChangeLanguage}
            className="text-xs font-semibold text-blue-700 hover:underline cursor-pointer"
          >
            {tText(UI_STRINGS.changeLanguage, language)}
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
            <BrandLogo size="sm" language={language} showWordmark={false} />
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {tText(UI_STRINGS.loginTitle, language)}
              </h1>
              <p className="text-xs text-slate-500">
                {tText(UI_STRINGS.appName, language)}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6">
            {tText(UI_STRINGS.loginSubtitle, language)}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login-username"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {tText(UI_STRINGS.usernameLabel, language)}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  id="login-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. Karthikeya"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {tText(UI_STRINGS.passwordLabel, language)}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {tText(UI_STRINGS.loginButton, language)}
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => onLogin("Topper Student")}
              className="w-full py-2.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-colors cursor-pointer"
            >
              {tText(UI_STRINGS.guestButton, language)}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
