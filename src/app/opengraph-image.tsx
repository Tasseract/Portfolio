import { ImageResponse } from "next/og";

export const alt = "Jhalen Troy L. Jose — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #BEC2FF 0%, transparent 45%), radial-gradient(circle at 80% 80%, #FFB59A 0%, transparent 45%), #121318",
          color: "#E5E2EC",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#BEC2FF",
            }}
          />
          <span
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C7C5D0",
              fontWeight: 600,
            }}
          >
            Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 110,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#FFFFFF",
            }}
          >
            Jhalen Troy
          </span>
          <span
            style={{
              fontSize: 110,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -2,
              background:
                "linear-gradient(120deg, #BEC2FF 0%, #FFB59A 50%, #BEC2FF 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            L. Jose
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#C7C5D0",
            fontSize: 26,
          }}
        >
          <span>BS Information Technology · MMSU</span>
          <span style={{ opacity: 0.8 }}>github.com/Tasseract</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
