"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/data/site";

export function Footer() {
  const { dictionary } = useLanguage();
  const { footer } = dictionary;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 text-center text-sm text-zinc-500">
        <p>
          © {year} {site.name}. {footer.rights}
        </p>
        <p>{footer.builtWith}</p>
      </div>
    </footer>
  );
}
