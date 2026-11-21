import type { Language } from "../types";
import { tText, UI_STRINGS } from "../data/translations";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  language: Language;
  showWordmark?: boolean;
  onClick?: () => void;
}

export function BrandLogo({
  size = "sm",
  language,
  showWordmark = true,
  onClick,
}: BrandLogoProps) {
  const iconDim =
    size === "lg" ? "w-20 h-20" : size === "md" ? "w-11 h-11" : "w-9 h-9";
  const textSize =
    size === "lg"
      ? "text-3xl sm:text-4xl font-extrabold tracking-tight"
      : size === "md"
      ? "text-xl font-bold tracking-tight"
      : "text-base sm:text-lg font-bold tracking-tight";

  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 text-left ${
        onClick ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg" : ""
      } ${size === "lg" ? "flex-col text-center gap-4" : ""}`}
    >
      <div
        className={`${iconDim} rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-sm border border-blue-500/30 shrink-0`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={size === "lg" ? "w-12 h-12" : "w-5 h-5"}
          aria-hidden="true"
        >
          <path
            d="M24 8L6 17L24 26L42 17L24 8Z"
            fill="#FFFFFF"
          />
          <path
            d="M12 21.5V31.5C12 34.5 17.4 37.5 24 37.5C30.6 37.5 36 34.5 36 31.5V21.5L24 27.5L12 21.5Z"
            fill="#BFDBFE"
          />
          <path
            d="M39 19V31"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="39" cy="33" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>
      {showWordmark && (
        <span
          className={`${textSize} font-display text-slate-900 whitespace-nowrap shrink-0`}
        >
          {tText(UI_STRINGS.appName, language)}
        </span>
      )}
    </Wrapper>
  );
}
