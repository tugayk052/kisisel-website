"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { dictionary } = useLanguage();
  const { about } = dictionary;

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          {about.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {about.heading}
        </h2>

        <div className="mt-8 grid gap-12 sm:grid-cols-5">
          <div className="space-y-4 sm:col-span-3">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-sm font-semibold tracking-widest text-zinc-300 uppercase">
              {about.skillsHeading}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
