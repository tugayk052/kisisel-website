import Image from "next/image";
import type { ProjectImage as ProjectImageKey } from "@/i18n/dictionaries";

const IMAGE_MAP: Record<ProjectImageKey, { src: string; position: string }> = {
  bathroom: { src: "/projects/banyo-tasarim.png", position: "object-center" },
  weather: { src: "/projects/hava-durumu.png", position: "object-top" },
  qrmenu: { src: "/projects/qr-menu.png", position: "object-top" },
};

export function ProjectImage({ image }: { image: ProjectImageKey }) {
  const { src, position } = IMAGE_MAP[image];
  return (
    <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className={`object-cover ${position}`}
      />
    </div>
  );
}
