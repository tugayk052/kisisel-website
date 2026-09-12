"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Projects() {
  const { dictionary } = useLanguage();
  const { projects } = dictionary;

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          {projects.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {projects.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          {projects.subheading}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.items.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs font-medium text-zinc-500">
                {projects.comingSoon}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
