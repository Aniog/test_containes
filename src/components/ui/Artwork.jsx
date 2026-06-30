import React from "react";

// Artwork renders elegant, editorial inline-SVG product photography placeholders.
// All artwork uses a warm, cohesive palette (ivory / bone / gold / ink).
// To swap in real photography, replace this component's usage with <img src={product.image} />.
//
// Props:
//   variant: one of "earCuff" | "floraNecklace" | "sphereHuggies" | "filigreeDrop"
//            | "heirloomSet" | "ugcEar" | "ugcNeck" | "ugcHuggie" | "ugcStack"
//            | "ugcWrist" | "ugcEar2" | "hero" | "story" | "earrings" | "necklaces" | "huggies"
//   tone: "warm" (default) | "deep" — slightly different background mood
//   className: applied to the root <svg>

const PALETTES = {
  warm: {
    bgA: "#F5F0E8",
    bgB: "#EFE7D8",
    bgC: "#E5DDD0",
    gold: "#B08949",
    goldHi: "#D4B27C",
    goldShade: "#8A6A35",
    ink: "#1F1A17",
    skin: "#D9B79A",
    skinShade: "#A67E5C",
    leaf: "#3F4A37",
  },
  deep: {
    bgA: "#2A1F1A",
    bgB: "#1F1714",
    bgC: "#3D2D24",
    gold: "#D4B27C",
    goldHi: "#E7D2A6",
    goldShade: "#B08949",
    ink: "#1F1A17",
    skin: "#C49A78",
    skinShade: "#8B5E3F",
    leaf: "#5C6B4A",
  },
};

function Background({ id, palette, tone }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor={tone === "deep" ? palette.bgC : palette.bgB} />
          <stop offset="100%" stopColor={palette.bgA} />
        </radialGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.goldHi} />
          <stop offset="50%" stopColor={palette.gold} />
          <stop offset="100%" stopColor={palette.goldShade} />
        </linearGradient>
        <linearGradient id={`${id}-goldV`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.goldHi} />
          <stop offset="100%" stopColor={palette.goldShade} />
        </linearGradient>
        <radialGradient id={`${id}-hi`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-bg)`} />
    </>
  );
}

// ---------- Jewelry illustrations ----------
function EarCuff({ id, palette }) {
  return (
    <g>
      {/* soft warm glow */}
      <circle cx="50%" cy="55%" r="35%" fill={palette.gold} opacity="0.10" filter={`url(#${id}-blur)`} />
      {/* ear silhouette */}
      <path
        d="M48 30 C58 30 64 38 64 50 C64 62 60 72 54 78 C50 82 46 82 44 78 L44 60 C44 56 42 54 42 50 C42 42 42 32 48 30 Z"
        fill={palette.skin}
        opacity="0.85"
      />
      <path
        d="M48 30 C58 30 64 38 64 50 C64 62 60 72 54 78"
        fill="none"
        stroke={palette.skinShade}
        strokeWidth="0.6"
        opacity="0.5"
      />
      {/* cuff — a partial ring wrapping the ear */}
      <g transform="translate(46 56)">
        <path
          d="M0 0 C -6 -4 -10 -2 -12 4 C -14 12 -10 18 -2 18 C 8 18 14 10 12 2 C 11 -3 6 -5 0 0 Z"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="2.4"
        />
        {/* crystal */}
        <circle cx="-2" cy="10" r="2.6" fill="#FFFFFF" opacity="0.95" />
        <circle cx="-2" cy="10" r="1.2" fill={palette.goldHi} />
      </g>
    </g>
  );
}

function FloraNecklace({ id, palette }) {
  return (
    <g>
      <circle cx="50%" cy="48%" r="40%" fill={palette.gold} opacity="0.10" filter={`url(#${id}-blur)`} />
      {/* chain — gentle catenary */}
      <path
        d="M15 32 Q 50 96 85 32"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.1"
      />
      {/* secondary chain */}
      <path
        d="M20 36 Q 50 86 80 36"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="0.6"
        opacity="0.6"
      />
      {/* floral pendant */}
      <g transform="translate(50 70)">
        {/* 5 petal flower */}
        {[0, 72, 144, 216, 288].map((deg, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-6"
            rx="4"
            ry="7"
            transform={`rotate(${deg})`}
            fill={["#D88FA5", "#E7B68B", "#C7A9D9", "#F0C879", "#9BC2B5"][i]}
            opacity="0.95"
          />
        ))}
        <circle r="3" fill={palette.gold} />
        <circle r="1.4" fill={palette.goldHi} />
      </g>
      {/* scattered crystals along chain */}
      {[22, 36, 64, 78].map((x, i) => (
        <circle key={i} cx={x + "%"} cy={36 + Math.sin((x / 100) * Math.PI) * 22 + "%"} r="1.2" fill={palette.goldHi} />
      ))}
    </g>
  );
}

function SphereHuggies({ id, palette }) {
  return (
    <g>
      <circle cx="50%" cy="50%" r="40%" fill={palette.gold} opacity="0.10" filter={`url(#${id}-blur)`} />
      {/* two dome huggies */}
      <g transform="translate(32 50)">
        <circle r="14" fill={`url(#${id}-gold)`} />
        <circle r="14" fill={`url(#${id}-hi)`} opacity="0.9" />
        <circle r="3" cx="-4" cy="-4" fill="#FFFFFF" opacity="0.7" />
      </g>
      <g transform="translate(68 50)">
        <circle r="14" fill={`url(#${id}-gold)`} />
        <circle r="14" fill={`url(#${id}-hi)`} opacity="0.9" />
        <circle r="3" cx="-4" cy="-4" fill="#FFFFFF" opacity="0.7" />
      </g>
    </g>
  );
}

function FiligreeDrop({ id, palette }) {
  return (
    <g>
      <circle cx="50%" cy="50%" r="38%" fill={palette.gold} opacity="0.10" filter={`url(#${id}-blur)`} />
      {/* earring 1 */}
      <g transform="translate(32 48)">
        <line x1="0" y1="-18" x2="0" y2="-2" stroke={`url(#${id}-goldV)`} strokeWidth="1.2" />
        <path
          d="M-10 -2 C -10 6 -6 12 0 14 C 6 12 10 6 10 -2 Z"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="1.2"
        />
        {/* filigree pattern */}
        <path
          d="M-6 0 C -3 4 3 4 6 0 M -5 4 C -2 8 2 8 5 4 M 0 -2 L 0 12"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="0.8"
          opacity="0.85"
        />
        <circle r="1.5" cy="14" fill={palette.goldHi} />
      </g>
      {/* earring 2 */}
      <g transform="translate(68 48)">
        <line x1="0" y1="-18" x2="0" y2="-2" stroke={`url(#${id}-goldV)`} strokeWidth="1.2" />
        <path
          d="M-10 -2 C -10 6 -6 12 0 14 C 6 12 10 6 10 -2 Z"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="1.2"
        />
        <path
          d="M-6 0 C -3 4 3 4 6 0 M -5 4 C -2 8 2 8 5 4 M 0 -2 L 0 12"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="0.8"
          opacity="0.85"
        />
        <circle r="1.5" cy="14" fill={palette.goldHi} />
      </g>
    </g>
  );
}

function HeirloomSet({ id, palette }) {
  return (
    <g>
      <circle cx="50%" cy="50%" r="42%" fill={palette.gold} opacity="0.10" filter={`url(#${id}-blur)`} />
      {/* gift box silhouette */}
      <g transform="translate(50 60)">
        <rect x="-22" y="-6" width="44" height="22" rx="2" fill={palette.ink} opacity="0.9" />
        <rect x="-22" y="-6" width="44" height="6" fill={palette.charcoal || "#3A332E"} opacity="0.9" />
        <rect x="-2" y="-6" width="4" height="22" fill={palette.gold} />
        <rect x="-22" y="-3" width="44" height="2" fill={palette.gold} />
        {/* bow */}
        <path d="M-6 -10 C -10 -16 -2 -14 0 -10 C 2 -14 10 -16 6 -10 C 10 -8 4 -6 0 -8 C -4 -6 -10 -8 -6 -10 Z" fill={palette.gold} />
      </g>
      {/* studs sitting on top */}
      <g transform="translate(40 38)">
        <circle r="5" fill={`url(#${id}-gold)`} />
        <circle r="2" cx="-1.5" cy="-1.5" fill="#FFFFFF" opacity="0.6" />
      </g>
      <g transform="translate(60 38)">
        <circle r="5" fill={`url(#${id}-gold)`} />
        <circle r="2" cx="-1.5" cy="-1.5" fill="#FFFFFF" opacity="0.6" />
      </g>
      {/* small chain draped */}
      <path d="M30 50 Q 50 56 70 50" fill="none" stroke={palette.gold} strokeWidth="0.7" opacity="0.7" />
    </g>
  );
}

// ---------- UGC reel illustrations (model wearing jewelry) ----------
function UgcEar({ id, palette }) {
  return (
    <g>
      {/* hair */}
      <path d="M0 0 L100 0 L100 60 C 80 70 60 80 50 80 C 40 80 20 70 0 60 Z" fill="#3A2820" />
      {/* face profile */}
      <path
        d="M40 22 C 56 22 64 30 64 44 C 64 56 62 66 58 74 C 56 80 52 84 48 86 L 44 86 C 40 84 38 78 38 70 L 38 60 C 36 56 34 50 34 44 C 34 32 32 22 40 22 Z"
        fill={palette.skin}
      />
      <path d="M64 44 C 64 50 62 56 60 60" fill="none" stroke={palette.skinShade} strokeWidth="0.4" opacity="0.6" />
      {/* ear with three huggies */}
      <g transform="translate(40 56)">
        <path d="M-2 0 C 2 -2 6 0 6 4 C 6 8 2 10 -2 8 Z" fill={palette.skin} opacity="0.8" />
        <circle r="1.6" cx="-1" cy="2" fill={`url(#${id}-gold)`} />
        <circle r="1.6" cx="2" cy="5" fill={`url(#${id}-gold)`} />
        <circle r="1.4" cx="3" cy="8" fill={`url(#${id}-gold)`} />
      </g>
      {/* soft earring glow */}
      <circle cx="42" cy="62" r="6" fill={palette.gold} opacity="0.18" filter={`url(#${id}-blur)`} />
    </g>
  );
}

function UgcNeck({ id, palette }) {
  return (
    <g>
      {/* shoulder/neck silhouette */}
      <path d="M0 0 L100 0 L100 40 C 80 48 70 60 60 78 L 40 78 C 30 60 20 48 0 40 Z" fill={palette.skin} opacity="0.95" />
      <path d="M30 30 C 35 24 45 22 50 22 C 55 22 65 24 70 30" fill="none" stroke={palette.skinShade} strokeWidth="0.4" opacity="0.5" />
      {/* necklace chain */}
      <path d="M22 40 Q 50 64 78 40" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.4" />
      {/* pendant */}
      <g transform="translate(50 56)">
        <ellipse rx="6" ry="8" fill={`url(#${id}-gold)`} />
        <ellipse rx="6" ry="8" fill={`url(#${id}-hi)`} opacity="0.6" />
        <circle r="1.6" cy="-2" fill="#FFFFFF" opacity="0.7" />
      </g>
    </g>
  );
}

function UgcHuggie({ id, palette }) {
  return (
    <g>
      <path d="M0 0 L100 0 L100 100 L 0 100 Z" fill={palette.skin} opacity="0.5" />
      {/* close-up of ear with huggies */}
      <g transform="translate(50 50)">
        <path d="M-20 -10 C -10 -20 10 -20 22 -8 C 30 0 30 14 24 26 C 18 36 8 42 0 38 L 0 18 C -4 14 -8 8 -8 0 C -8 -4 -12 -8 -20 -10 Z" fill={palette.skin} />
        <path d="M22 -8 C 30 0 30 14 24 26" fill="none" stroke={palette.skinShade} strokeWidth="0.4" opacity="0.5" />
        {/* huggie 1 */}
        <circle r="14" cx="-2" cy="10" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="3" />
        {/* huggie 2 */}
        <circle r="10" cx="4" cy="0" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="2.4" />
        {/* huggie 3 */}
        <circle r="6" cx="2" cy="-8" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.8" />
      </g>
    </g>
  );
}

function UgcStack({ id, palette }) {
  return (
    <g>
      <path d="M0 0 L100 0 L100 100 L 0 100 Z" fill={palette.skin} opacity="0.6" />
      <g transform="translate(50 55)">
        {/* hand silhouette */}
        <path d="M-20 0 C -16 -6 -10 -8 -4 -6 L 0 -16 C 2 -20 6 -20 8 -16 L 12 -8 L 18 -10 C 22 -10 22 -6 20 -2 L 16 4 C 18 6 16 10 12 10 L -10 12 C -18 12 -22 6 -20 0 Z" fill={palette.skin} />
        {/* rings */}
        <rect x="-16" y="0" width="6" height="3" fill={`url(#${id}-gold)`} />
        <rect x="-8" y="2" width="6" height="3" fill={`url(#${id}-gold)`} />
        <rect x="2" y="2" width="6" height="3" fill={`url(#${id}-gold)`} />
      </g>
    </g>
  );
}

function UgcWrist({ id, palette }) {
  return (
    <g>
      <path d="M0 0 L100 0 L100 100 L 0 100 Z" fill={palette.skin} opacity="0.55" />
      <g transform="translate(50 56)">
        {/* wrist */}
        <ellipse cx="0" cy="0" rx="38" ry="20" fill={palette.skin} />
        <ellipse cx="0" cy="0" rx="38" ry="20" fill={`url(#${id}-hi)`} opacity="0.4" />
        {/* bracelet */}
        <ellipse cx="0" cy="0" rx="32" ry="14" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.6" />
        <ellipse cx="0" cy="-2" rx="32" ry="14" fill="none" stroke={palette.goldHi} strokeWidth="0.4" opacity="0.6" />
        {/* charm */}
        <circle r="3" cy="10" fill={`url(#${id}-gold)`} />
      </g>
    </g>
  );
}

function UgcEar2({ id, palette }) {
  return (
    <g>
      {/* hair pulled back */}
      <path d="M0 0 L100 0 L100 100 L 0 100 Z" fill="#2A1A14" />
      <path d="M0 0 L100 0 L100 30 C 70 35 30 35 0 30 Z" fill={palette.skin} opacity="0.95" />
      {/* simple face */}
      <path d="M30 30 C 30 50 32 70 40 80 L 60 80 C 68 70 70 50 70 30 Z" fill={palette.skin} />
      {/* earring drop */}
      <g transform="translate(35 64)">
        <line x1="0" y1="-4" x2="0" y2="0" stroke={palette.gold} strokeWidth="0.6" />
        <path d="M-4 0 C -4 6 -2 10 0 12 C 2 10 4 6 4 0 Z" fill={`url(#${id}-gold)`} />
        <circle r="1.5" cy="12" fill={palette.goldHi} />
      </g>
      <g transform="translate(65 64)">
        <line x1="0" y1="-4" x2="0" y2="0" stroke={palette.gold} strokeWidth="0.6" />
        <path d="M-4 0 C -4 6 -2 10 0 12 C 2 10 4 6 4 0 Z" fill={`url(#${id}-gold)`} />
        <circle r="1.5" cy="12" fill={palette.goldHi} />
      </g>
    </g>
  );
}

// ---------- Page-level illustrations ----------
function Hero({ id, palette }) {
  return (
    <g>
      <Background id={id} palette={palette} tone="deep" />
      {/* warm light pools */}
      <circle cx="32%" cy="42%" r="34%" fill={palette.gold} opacity="0.18" filter={`url(#${id}-blur)`} />
      <circle cx="72%" cy="58%" r="28%" fill={palette.goldHi} opacity="0.14" filter={`url(#${id}-blur)`} />
      {/* model silhouette: shoulder + neck + jaw */}
      <path
        d="M0 100 L 0 78 C 12 72 24 64 32 56 C 36 50 38 44 40 38 C 40 30 44 22 52 18 C 60 22 64 30 64 38 C 66 44 68 50 72 56 C 80 64 92 72 100 78 L 100 100 Z"
        fill={palette.skin}
        opacity="0.92"
      />
      {/* hair sweep */}
      <path
        d="M0 100 L 0 70 C 8 64 18 56 26 50 C 32 44 38 38 42 32 C 44 26 50 22 56 22 C 62 22 68 28 70 36 C 70 40 68 44 64 46 C 58 48 52 50 46 54 C 36 60 26 66 18 72 C 12 76 6 80 0 84 Z"
        fill="#2A1A14"
        opacity="0.95"
      />
      {/* ear + drop earring on visible side */}
      <g transform="translate(40 56)">
        <path d="M-2 0 C 2 -2 6 0 6 4 C 6 8 2 10 -2 8 Z" fill={palette.skin} opacity="0.85" />
        <g transform="translate(0 12)">
          <line x1="0" y1="0" x2="0" y2="2" stroke={palette.gold} strokeWidth="0.4" />
          <path d="M-3 2 C -3 6 -1.5 9 0 11 C 1.5 9 3 6 3 2 Z" fill={`url(#${id}-gold)`} />
          <circle r="1" cy="11" fill={palette.goldHi} />
        </g>
      </g>
      {/* soft necklace drape */}
      <path
        d="M44 64 Q 56 72 70 64"
        fill="none"
        stroke={palette.gold}
        strokeWidth="0.5"
        opacity="0.7"
      />
      <circle cx="57" cy="70" r="1.2" fill={palette.goldHi} />
    </g>
  );
}

function Story({ id, palette }) {
  return (
    <g>
      <Background id={id} palette={palette} tone="warm" />
      {/* workshop scene — abstract */}
      <circle cx="30%" cy="40%" r="22%" fill={palette.gold} opacity="0.10" filter={`url(#${id}-blur)`} />
      {/* hands working on a piece */}
      <g transform="translate(50 56)">
        <ellipse cx="-20" cy="6" rx="20" ry="10" fill={palette.skin} />
        <ellipse cx="20" cy="6" rx="20" ry="10" fill={palette.skin} />
        {/* tool / piece between hands */}
        <circle r="6" fill={`url(#${id}-gold)`} />
        <circle r="6" fill={`url(#${id}-hi)`} opacity="0.6" />
      </g>
      {/* soft bokeh */}
      {[20, 38, 70, 85].map((x, i) => (
        <circle key={i} cx={x + "%"} cy={(30 + (i * 13) % 50) + "%"} r={2 + (i % 3)} fill={palette.goldHi} opacity="0.25" />
      ))}
    </g>
  );
}

function Category({ id, palette, kind }) {
  const content = {
    earrings: <EarCuff id={id} palette={palette} />,
    necklaces: <FloraNecklace id={id} palette={palette} />,
    huggies: <SphereHuggies id={id} palette={palette} />,
  }[kind] || <EarCuff id={id} palette={palette} />;
  return (
    <g>
      <Background id={id} palette={palette} tone="deep" />
      {content}
    </g>
  );
}

const RENDERERS = {
  earCuff: EarCuff,
  floraNecklace: FloraNecklace,
  sphereHuggies: SphereHuggies,
  filigreeDrop: FiligreeDrop,
  heirloomSet: HeirloomSet,
  ugcEar: UgcEar,
  ugcNeck: UgcNeck,
  ugcHuggie: UgcHuggie,
  ugcStack: UgcStack,
  ugcWrist: UgcWrist,
  ugcEar2: UgcEar2,
  hero: Hero,
  story: Story,
  category: Category,
};

const Artwork = React.forwardRef(function Artwork(
  { variant = "earCuff", tone = "warm", category, className = "" },
  ref
) {
  const palette = PALETTES[tone] || PALETTES.warm;
  const id = React.useId();
  const Renderer = RENDERERS[variant] || EarCuff;
  if (variant === "category") {
    return (
      <svg
        ref={ref}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className={className}
        role="img"
        aria-label={category || "category"}
      >
        <Category id={id} palette={palette} kind={category || "earrings"} />
      </svg>
    );
  }
  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={variant}
    >
      <Background id={id} palette={palette} tone={tone} />
      <Renderer id={id} palette={palette} />
    </svg>
  );
});

export default Artwork;
