import { ImageResponse } from "next/og";

export const alt = "BERMONT — FABRIC FIRST";
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
          justifyContent: "space-between",
          background: "#0B0B0C",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 18,
              background: "#141416",
              border: "2px solid #232326",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 700,
              color: "#C6F33A",
            }}
          >
            B
          </div>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#8A8A85" }}>
            PREMIUM FABRIC / OVERSIZED SYSTEM
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 700,
              color: "#EDEDE8",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            BERMONT
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 42,
              fontWeight: 700,
              color: "#C6F33A",
              letterSpacing: 4,
            }}
          >
            FABRIC FIRST
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8A8A85", letterSpacing: 2 }}>
          <div style={{ display: "flex" }}>320 GSM · SHRINKAGE &lt;1.5% · OVERSIZED FIT</div>
          <div style={{ display: "flex" }}>DROP 001 — SS26</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
