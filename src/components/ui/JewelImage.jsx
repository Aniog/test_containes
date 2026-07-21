import { useMemo } from "react";

// A reusable jewelry silhouette SVG used as a strong visual fallback when
// the strk-img system has not yet resolved a stock image. Each product uses
// a different silhouette so the cards still feel varied on slow networks.
const SILHOUETTES = {
  cuff: (
    <g>
      <path d="M70 110 C 70 60, 130 60, 130 110" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="100" cy="78" r="6" fill="currentColor" />
      <path d="M100 78 L100 58" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" />
    </g>
  ),
  pendant: (
    <g>
      <path d="M40 40 Q 100 30 160 40" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="120" r="22" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="100" cy="120" r="10" fill="currentColor" opacity="0.7" />
    </g>
  ),
  huggie: (
    <g>
      <circle cx="100" cy="100" r="36" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5" />
    </g>
  ),
  drop: (
    <g>
      <circle cx="100" cy="58" r="6" fill="currentColor" />
      <path d="M100 64 C 80 100, 80 130, 100 150 C 120 130, 120 100, 100 64 Z" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>
  ),
  set: (
    <g>
      <rect x="36" y="46" width="128" height="100" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="74" cy="96" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="126" cy="96" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M86 130 L 114 130" stroke="currentColor" strokeWidth="2" />
    </g>
  ),
  hero: (
    <g opacity="0.85">
      {/* Abstract model silhouette with ear + neck jewelry */}
      <path d="M70 60 C 70 30, 130 30, 130 60 L 130 150 C 130 180, 70 180, 70 150 Z" fill="currentColor" opacity="0.35" />
      <circle cx="138" cy="92" r="5" fill="#C9A96A" />
      <path d="M132 92 Q 138 88 144 92" fill="none" stroke="#C9A96A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M86 168 Q 100 178 114 168" fill="none" stroke="#C9A96A" strokeWidth="2" />
      <circle cx="100" cy="174" r="3" fill="#C9A96A" />
    </g>
  ),
  model: (
    <g opacity="0.7">
      <ellipse cx="100" cy="60" rx="34" ry="42" fill="currentColor" />
      <path d="M30 200 C 30 130, 170 130, 170 200 Z" fill="currentColor" />
    </g>
  ),
  lifestyle: (
    <g opacity="0.7">
      <rect x="50" y="30" width="100" height="140" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M85 95 L 100 80 L 115 95" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
};

const SHAPES = {
  cuff: SILHOUETTES.cuff,
  pendant: SILHOUETTES.pendant,
  huggie: SILHOUETTES.huggie,
  drop: SILHOUETTES.drop,
  set: SILHOUETTES.set,
  hero: SILHOUETTES.hero,
  model: SILHOUETTES.model,
  lifestyle: SILHOUETTES.lifestyle,
};

const BACKGROUNDS = {
  // Warm neutral + gold radial gradient fallbacks
  warm: { from: "#3a2e22", to: "#1A1612", accent: "#C9A96A" },
  velvet: { from: "#2A1E18", to: "#0F0C09", accent: "#E8D9B7" },
  cream: { from: "#F0E9DC", to: "#FAF6EF", accent: "#B8965A" },
  dusk: { from: "#4a3826", to: "#1A1612", accent: "#E8D9B7" },
  glow: { from: "#3d2e1d", to: "#0F0C09", accent: "#C9A96A" },
};

export default function JewelImage({ shape = "cuff", bg = "warm", alt, className = "", style }) {
  const palette = BACKGROUNDS[bg] || BACKGROUNDS.warm;
  const id = useMemo(() => `jg-${Math.random().toString(36).slice(2, 9)}`, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `radial-gradient(120% 90% at 50% 35%, ${palette.from} 0%, ${palette.to} 75%)`, ...style }}
      role="img"
      aria-label={alt}
    >
      {/* warm gold light bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(40% 35% at 50% 38%, ${palette.accent}33 0%, transparent 70%)`,
        }}
      />
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.accent} stopOpacity="0.95" />
            <stop offset="100%" stopColor={palette.accent} stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <g style={{ color: "url(#" + `${id}-gold` + ")" }} fill="currentColor">
          {SHAPES[shape] || SHAPES.cuff}
        </g>
      </svg>
    </div>
  );
}
