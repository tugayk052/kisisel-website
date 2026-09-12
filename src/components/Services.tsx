"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Services() {
  const { dictionary } = useLanguage();
  const { services } = dictionary;

  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          {services.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {services.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          {services.subheading}
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {services.items.map((service, index) => (
            <div key={service.title} className="bg-zinc-950 p-6">
              <span className="font-mono text-sm text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
