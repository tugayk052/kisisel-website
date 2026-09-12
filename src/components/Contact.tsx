"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/data/site";

export function Contact() {
  const { dictionary } = useLanguage();
  const { contact } = dictionary;

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          {contact.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">{contact.subheading}</p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
          >
            {contact.emailLabel}: {site.email}
          </a>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              {contact.socialsHeading}
            </h3>
            <div className="mt-3 flex justify-center gap-6">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
