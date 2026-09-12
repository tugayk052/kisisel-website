"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-sm font-medium backdrop-blur-sm"
    >
      {(["tr", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`rounded-full px-3 py-1 transition-colors ${
            language === lang
              ? "bg-accent text-zinc-950"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
