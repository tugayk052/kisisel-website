import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Otomasyon, özel yazılım geliştirme, mobil uygulama ve yapay zeka entegrasyonu üzerine yazılar.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 py-28 pt-40">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
            Yazılar
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Otomasyon, özel yazılım geliştirme, mobil uygulama ve yapay zeka
            entegrasyonu üzerine {site.name}&apos;ın yazıları.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40"
              >
                <h2 className="text-xl font-semibold text-white group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {post.description}
                </p>
                <p className="mt-5 text-xs font-medium text-zinc-500">
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
