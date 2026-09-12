"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { dictionary } = useLanguage();

  const links = [
    { href: "/#about", label: dictionary.nav.about },
    { href: "/#services", label: dictionary.nav.services },
    { href: "/#projects", label: dictionary.nav.projects },
    { href: "/blog", label: dictionary.nav.blog },
    { href: "/#contact", label: dictionary.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-accent"
        >
          TK
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4 sm:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
