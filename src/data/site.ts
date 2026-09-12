// Central place for site-wide facts that don't change with language.
// TODO: add LinkedIn once that profile is ready.

export const site = {
  name: "Tugay Kılıç",
  // Drives metadataBase, sitemap.ts, robots.ts and JSON-LD.
  url: "https://tugaykilic.com",
  email: "tugaykilic0052@gmail.com",
  // Full number in international format, digits only, no "+" or spaces
  // (required by the wa.me link format). 0536 208 69 07 -> 90 + without the leading 0.
  whatsappNumber: "905362086907",
  socials: [
    { label: "GitHub", href: "https://github.com/tugayk052" },
    { label: "Instagram", href: "https://www.instagram.com/tugay_kilic52/" },
  ],
};
