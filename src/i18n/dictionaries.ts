export type Language = "tr" | "en";

export type ProjectImage = "bathroom" | "weather" | "qrmenu" | "berber";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  image?: ProjectImage;
  link?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    projects: string;
    blog: string;
    contact: string;
  };
  hero: {
    availability: string;
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    skillsHeading: string;
    skills: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    subheading: string;
    comingSoon: string;
    viewSite: string;
    items: Project[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    emailLabel: string;
    whatsappLabel: string;
    socialsHeading: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

export const dictionaries: Record<Language, Dictionary> = {
  tr: {
    meta: {
      title: "Tugay Kılıç — Yazılım Geliştirici",
      description:
        "Tugay Kılıç'ın kişisel web sitesi. Yazılım geliştirici olarak geliştirdiğim projeler ve iletişim bilgilerim.",
    },
    nav: {
      about: "Hakkımda",
      services: "Hizmetler",
      projects: "Projeler",
      blog: "Blog",
      contact: "İletişim",
    },
    hero: {
      availability: "Yeni projelere açığım",
      greeting: "$ merhaba, ben",
      name: "Tugay Kılıç",
      role: "Yazılım Geliştirici",
      tagline:
        "Fikirleri çalışan ürünlere dönüştürüyorum. Web uygulamaları, otomasyon araçları ve yapay zeka entegrasyonları üzerine çalışıyorum.",
      ctaProjects: "Projelerimi Gör",
      ctaContact: "Birlikte Çalışalım",
    },
    about: {
      eyebrow: "Tanışalım",
      heading: "Hakkımda",
      paragraphs: [
        "Yazılım geliştirmeye meraklı biriyim; web uygulamalarından otomasyon araçlarına kadar farklı alanlarda projeler geliştiriyorum.",
        "Bu site de dahil olmak üzere ürettiğim projeleri burada bir araya getiriyorum. Zamanla bu bölüm gerçek deneyimlerim ve hikayemle güncellenecek.",
      ],
      skillsHeading: "İlgi alanlarım",
      skills: [
        "JavaScript / TypeScript",
        "React & Next.js",
        "Mobil Uygulama Geliştirme",
        "Web Tasarım",
        "Otomasyon",
        "Yapay Zeka Araçları",
        "UI/UX",
      ],
    },
    services: {
      eyebrow: "Ne Yapıyorum",
      heading: "Hizmetler",
      subheading: "Genellikle üzerinde çalıştığım iş türleri.",
      items: [
        {
          title: "Web Uygulamaları",
          description:
            "Next.js ve React ile hızlı, ölçeklenebilir ve bakımı kolay web siteleri ve uygulamalar geliştiriyorum.",
        },
        {
          title: "Otomasyon",
          description:
            "Tekrar eden işleri betikler ve araçlarla otomatikleştirerek zaman kazandırıyorum.",
        },
        {
          title: "Yapay Zeka Entegrasyonu",
          description:
            "Mevcut ürünlere veya iş akışlarına yapay zeka destekli özellikler entegre ediyorum.",
        },
        {
          title: "Mobil Uygulama",
          description:
            "React Native ile iOS ve Android için tek kod tabanından performanslı mobil uygulamalar geliştiriyorum.",
        },
      ],
    },
    projects: {
      eyebrow: "Portföy",
      heading: "Projelerim",
      subheading: "Üzerinde çalıştığım bazı projeler.",
      comingSoon: "Bağlantılar yakında",
      viewSite: "Siteyi Gör",
      items: [
        {
          title: "Banyo Tasarım Asistanı",
          description:
            "Yapay zeka destekli görsel üretim ile banyo iç mekanları için yeniden tasarım önerileri oluşturan bir araç.",
          tags: ["Yapay Zeka", "Görsel Üretim", "PowerShell"],
          status: "Geliştirme aşamasında",
          image: "bathroom",
        },
        {
          title: "Hava Durumu PWA",
          description:
            "Türkiye'deki şehirler için, o şehre ait simge fotoğraflarla zenginleştirilmiş bir hava durumu uygulaması (PWA).",
          tags: ["PWA", "JavaScript", "Service Worker"],
          status: "Yayında",
          image: "weather",
        },
        {
          title: "Kişisel Web Sitesi",
          description:
            "Şu an görüntülediğin bu site — Next.js, TypeScript ve Tailwind CSS ile geliştirildi, TR/EN dil desteği içeriyor.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          status: "Yayında",
        },
        {
          title: "X Cafe QR Menü",
          description:
            "Kafeler için geliştirdiğim, kategorilere ayrılmış, fotoğraflı ve mobil uyumlu dijital QR menü. Müşteriler QR kodu okutarak menüye anında ulaşıyor.",
          tags: ["QR Menü", "JavaScript", "Vercel"],
          status: "Yayında",
          image: "qrmenu",
          link: "https://menu.tugaykilic.com",
        },
        {
          title: "Berber Randevu Sistemi",
          description:
            "Berber dükkanları için geliştirdiğim, Firebase tabanlı canlı randevu sistemi. Müşteriler berber/hizmet/tarih seçip anında randevu alıyor; admin panelinde saatlik randevu takvimi, berber/hizmet yönetimi ve günlük kasa takibi var.",
          tags: ["Firebase", "JavaScript", "Vercel"],
          status: "Yayında",
          image: "berber",
          link: "https://randevu.tugaykilic.com",
        },
      ],
    },
    contact: {
      eyebrow: "Bağlantı kur",
      heading: "İletişime Geç",
      subheading:
        "Bir proje fikrin mi var, yoksa sadece merhaba mı demek istiyorsun? Aşağıdaki kanallardan ulaşabilirsin.",
      emailLabel: "E-posta",
      whatsappLabel: "WhatsApp'tan Yaz",
      socialsHeading: "Sosyal medya",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      builtWith: "Next.js ve Tailwind CSS ile geliştirildi.",
    },
  },
  en: {
    meta: {
      title: "Tugay Kılıç — Software Developer",
      description:
        "Personal website of Tugay Kılıç, a software developer. Explore the projects I've built and get in touch.",
    },
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      availability: "Available for new projects",
      greeting: "$ whoami",
      name: "Tugay Kılıç",
      role: "Software Developer",
      tagline:
        "I turn ideas into working products — web applications, automation tools, and AI integrations.",
      ctaProjects: "See My Projects",
      ctaContact: "Let's Work Together",
    },
    about: {
      eyebrow: "Get to know me",
      heading: "About Me",
      paragraphs: [
        "I'm passionate about building software — from web applications to automation tools across different domains.",
        "This is where I collect the projects I build, including this very site. Over time this section will grow with my real experience and story.",
      ],
      skillsHeading: "Areas of interest",
      skills: [
        "JavaScript / TypeScript",
        "React & Next.js",
        "Mobile App Development",
        "Web Design",
        "Automation",
        "AI Tooling",
        "UI/UX",
      ],
    },
    services: {
      eyebrow: "What I Do",
      heading: "Services",
      subheading: "The kind of work I usually take on.",
      items: [
        {
          title: "Web Applications",
          description:
            "I build fast, scalable, and maintainable websites and applications with Next.js and React.",
        },
        {
          title: "Automation",
          description:
            "I save time by automating repetitive work with scripts and tools.",
        },
        {
          title: "AI Integration",
          description:
            "I integrate AI-powered features into existing products or workflows.",
        },
        {
          title: "Mobile Apps",
          description:
            "I build performant iOS and Android apps from a single codebase with React Native.",
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "My Projects",
      subheading: "A few things I've been working on.",
      comingSoon: "Links coming soon",
      viewSite: "View Site",
      items: [
        {
          title: "Bathroom Design Assistant",
          description:
            "An AI-assisted image generation tool that suggests redesign ideas for bathroom interiors.",
          tags: ["AI", "Image Generation", "PowerShell"],
          status: "In progress",
          image: "bathroom",
        },
        {
          title: "Weather PWA",
          description:
            "A weather app for Turkish cities, enriched with landmark photos for each city, built as a PWA.",
          tags: ["PWA", "JavaScript", "Service Worker"],
          status: "Live",
          image: "weather",
        },
        {
          title: "Personal Website",
          description:
            "The very site you're looking at — built with Next.js, TypeScript and Tailwind CSS, with TR/EN language support.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          status: "Live",
        },
        {
          title: "X Cafe QR Menu",
          description:
            "A category-organized, photo-rich, mobile-friendly digital QR menu built for cafés. Customers scan a QR code to instantly view the menu.",
          tags: ["QR Menu", "JavaScript", "Vercel"],
          status: "Live",
          image: "qrmenu",
          link: "https://menu.tugaykilic.com",
        },
        {
          title: "Barber Appointment System",
          description:
            "A Firebase-backed live booking system for barbershops. Customers pick a barber/service/date and book instantly; the admin panel has an hourly appointment calendar, barber/service management, and daily cash tracking.",
          tags: ["Firebase", "JavaScript", "Vercel"],
          status: "Live",
          image: "berber",
          link: "https://randevu.tugaykilic.com",
        },
      ],
    },
    contact: {
      eyebrow: "Let's connect",
      heading: "Get In Touch",
      subheading:
        "Have a project idea, or just want to say hi? Reach out through any of the channels below.",
      emailLabel: "Email",
      whatsappLabel: "Message on WhatsApp",
      socialsHeading: "Social",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js and Tailwind CSS.",
    },
  },
};
