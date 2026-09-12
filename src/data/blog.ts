export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kobiler-icin-otomasyon-ve-ozel-yazilim",
    title: "KOBİ için Otomasyon ve Özel Yazılım Rehberi",
    description:
      "KOBİ için otomasyon ve özel yazılım rehberi: maliyet aralıkları, freelance-ajans karşılaştırması, KVKK uyumu ve doğru ortak seçim kriterleri.",
    date: "2026-09-12",
    readTime: "6 dk okuma",
  },
];
