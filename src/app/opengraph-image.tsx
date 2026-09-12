import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2dd4bf",
            display: "flex",
          }}
        >
          Software Developer
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            display: "flex",
          }}
        >
          {site.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
