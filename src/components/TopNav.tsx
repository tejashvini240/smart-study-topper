import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Language, PageRoute } from "../types";
import { tText, UI_STRINGS } from "../data/translations";
import { BrandLogo } from "./BrandLogo";

interface TopNavProps {
  language: Language;
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export function TopNav({ language, route, onNavigate }: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ label: string; target: PageRoute; active: boolean }> = [
    {
      label: tText(UI_STRINGS.navHome, language),
      target: { page: "home" },
      active: route.page === "home" || route.page === "class" || route.page === "lesson",
    },
    {
      label: tText(UI_STRINGS.navCourses, language),
      target: { page: "courses" },
      active: route.page === "courses",
    },
    {
      label: tText(UI_STRINGS.navQuiz, language),
      target: { page: "quiz" },
      active: route.page === "quiz",
    },
    {
      label: tText(UI_STRINGS.navPractice, language),
      target: { page: "practice" },
      active: route.page === "practice",
    },
    {
      label: tText(UI_STRINGS.navCareer, language),
      target: { page: "career" },
      active: route.page === "career",
    },
  ];

  const langLabel = language === "te" ? "తెలుగు" : language === "hi" ? "हिन्दी" : "English";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Title */}
        <BrandLogo
          size="sm"
          language={language}
          onClick={() => onNavigate({ page: "home" })}
        />

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate(item.target)}
              className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-t ${
                item.active
                  ? "border-blue-600 text-blue-700 font-semibold"
                  : "border-transparent hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action (Language Select) + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate({ page: "language" })}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{langLabel}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                onNavigate(item.target);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                item.active
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
