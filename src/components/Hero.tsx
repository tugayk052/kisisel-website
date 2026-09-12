"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/data/site";

export function Hero() {
  const { dictionary } = useLanguage();
  const { hero } = dictionary;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
            </span>
            {hero.availability}
          </div>

          <p className="font-mono text-sm text-accent">{hero.greeting}</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {hero.name}
          </h1>
          <h2 className="mt-2 text-xl font-medium text-zinc-400 sm:text-2xl">
            {hero.role}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {hero.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
            >
              {hero.ctaContact}
            </a>
            <a
              href="#projects"
              className="rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              {hero.ctaProjects}
            </a>
          </div>
        </div>

        <div className="hidden justify-self-center lg:block">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-accent/30 xl:h-52 xl:w-52">
            <Image
              src="/avatar.jpg"
              alt={site.name}
              fill
              sizes="208px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
