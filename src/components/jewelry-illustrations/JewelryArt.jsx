import React from "react";

/**
 * Elegant hand-drawn-style SVG jewelry illustrations.
 * Warm gold gradients on cocoa / warm neutral backgrounds.
 * Each illustration is exported as a component that accepts className.
 *
 * These are stylized editorial illustrations that read as "gold jewelry"
 * without being literal product photos — they fit the quiet-luxury mood.
 */

const GoldDefs = ({ id }) => (
  <defs>
    <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#F6E2A8" />
      <stop offset="35%" stopColor="#D4A957" />
      <stop offset="65%" stopColor="#B58A4C" />
      <stop offset="100%" stopColor="#7E5C2A" />
    </linearGradient>
    <linearGradient id={`gold-soft-${id}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#F1D693" />
      <stop offset="100%" stopColor="#A87C3A" />
    </linearGradient>
    <radialGradient id={`highlight-${id}`} cx="0.3" cy="0.3" r="0.6">
      <stop offset="0%" stopColor="#FFF3CC" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#FFF3CC" stopOpacity="0" />
    </radialGradient>
    <linearGradient id={`bg-warm-${id}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#3A2E22" />
      <stop offset="100%" stopColor="#1F1A14" />
    </linearGradient>
    <linearGradient id={`bg-ivory-${id}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FBF7EE" />
      <stop offset="100%" stopColor="#EFE3CC" />
    </linearGradient>
  </defs>
);

const Frame = ({ id, bg = "warm", children, className }) => (
  <svg
    viewBox="0 0 400 500"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <GoldDefs id={id} />
    <rect
      width="400"
      height="500"
      fill={bg === "warm" ? `url(#bg-warm-${id})` : `url(#bg-ivory-${id})`}
    />
    {children}
  </svg>
);

/* ============== HERO (silhouette with hoop earring) ============== */
export const HeroArt = ({ className }) => (
  <Frame id="hero" className={className}>
    {/* warm spotlight */}
    <radialGradient id="hero-spot" cx="0.65" cy="0.35" r="0.55">
      <stop offset="0%" stopColor="#8B6A3A" stopOpacity="0.55" />
      <stop offset="100%" stopColor="#1F1A14" stopOpacity="0" />
    </radialGradient>
    <rect width="400" height="500" fill="url(#hero-spot)" />

    {/* abstract shoulder / neck silhouette */}
    <path
      d="M120 500 C 120 380, 170 320, 200 320 C 230 320, 280 380, 280 500 Z"
      fill="#1A140E"
      opacity="0.9"
    />
    <path
      d="M180 320 C 180 290, 220 290, 220 320"
      stroke="#2A2118"
      strokeWidth="2"
      fill="none"
    />

    {/* Hair sweep */}
    <path
      d="M150 320 C 130 240, 160 150, 200 130 C 250 110, 290 170, 285 240 C 280 290, 250 320, 240 340"
      fill="#0F0B07"
      opacity="0.95"
    />

    {/* Gold hoop earring */}
    <g transform="translate(155 295)">
      <circle cx="0" cy="0" r="28" fill="none" stroke="url(#gold-hero)" strokeWidth="5" />
      <circle cx="0" cy="0" r="28" fill="url(#highlight-hero)" opacity="0.4" />
      <circle cx="-12" cy="-12" r="3" fill="#FFF3CC" opacity="0.7" />
    </g>

    {/* Delicate gold chain on neck */}
    <path
      d="M178 320 Q 200 345 222 320"
      fill="none"
      stroke="url(#gold-soft-hero)"
      strokeWidth="1.5"
    />
    <circle cx="200" cy="346" r="3" fill="url(#gold-hero)" />
  </Frame>
);

/* ============== PRODUCT 1 — Vivid Aura Ear Cuff ============== */
export const EarCuffArt = ({ className }) => (
  <Frame id="cuff" className={className}>
    <ellipse cx="200" cy="250" rx="160" ry="180" fill="#2A2118" opacity="0.6" />
    {/* Curved cuff */}
    <path
      d="M120 180 Q 200 100 280 180"
      fill="none"
      stroke="url(#gold-cuff)"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M120 180 Q 200 100 280 180"
      fill="none"
      stroke="url(#highlight-cuff)"
      strokeWidth="9"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Crystal accent */}
    <g transform="translate(200 140)">
      <polygon
        points="0,-18 12,0 0,18 -12,0"
        fill="url(#gold-soft-cuff)"
        stroke="#7E5C2A"
        strokeWidth="0.5"
      />
      <polygon
        points="0,-12 8,0 0,12 -8,0"
        fill="#FFF3CC"
        opacity="0.85"
      />
      <circle cx="-2" cy="-3" r="2" fill="#FFFFFF" opacity="0.9" />
    </g>
    {/* subtle sparkles */}
    <circle cx="160" cy="220" r="2" fill="#FFF3CC" opacity="0.6" />
    <circle cx="260" cy="230" r="1.5" fill="#FFF3CC" opacity="0.5" />
  </Frame>
);

/* ============== PRODUCT 2 — Majestic Flora Necklace ============== */
export const FloraNecklaceArt = ({ className }) => (
  <Frame id="flora" className={className}>
    <ellipse cx="200" cy="260" rx="170" ry="170" fill="#2A2118" opacity="0.55" />
    {/* Chain */}
    <path
      d="M100 140 Q 200 80 300 140"
      fill="none"
      stroke="url(#gold-flora)"
      strokeWidth="1.8"
    />
    <path
      d="M100 140 Q 200 200 300 140"
      fill="none"
      stroke="url(#gold-flora)"
      strokeWidth="1.8"
    />
    {/* Floral pendant — multi-petal flower */}
    <g transform="translate(200 230)">
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const cx = Math.cos(angle) * 28;
        const cy = Math.sin(angle) * 28;
        const colors = ["#E8B14C", "#B85C3F", "#7A8E5C", "#C77BA0", "#D4A957", "#5B7BA0"];
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="14"
            ry="9"
            fill={colors[i]}
            opacity="0.9"
            transform={`rotate(${i * 60} ${cx} ${cy})`}
          />
        );
      })}
      <circle cx="0" cy="0" r="10" fill="url(#gold-flora)" />
      <circle cx="-2" cy="-2" r="3" fill="#FFF3CC" opacity="0.8" />
    </g>
    {/* Tiny crystal drops */}
    <g transform="translate(150 200)">
      <polygon points="0,-6 4,0 0,6 -4,0" fill="#E8B14C" />
    </g>
    <g transform="translate(250 200)">
      <polygon points="0,-6 4,0 0,6 -4,0" fill="#C77BA0" />
    </g>
  </Frame>
);

/* ============== PRODUCT 3 — Golden Sphere Huggies ============== */
export const SphereHuggiesArt = ({ className }) => (
  <Frame id="huggies" className={className}>
    <ellipse cx="200" cy="250" rx="170" ry="180" fill="#2A2118" opacity="0.55" />
    {/* Two dome huggies — small hoop with chunky gold bead */}
    <g transform="translate(140 250)">
      <path
        d="M -32 0 A 32 32 0 0 1 32 0"
        fill="none"
        stroke="url(#gold-huggies)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="0" cy="6" r="16" fill="url(#gold-huggies)" />
      <circle cx="-5" cy="0" r="6" fill="url(#highlight-huggies)" opacity="0.8" />
    </g>
    <g transform="translate(260 250)">
      <path
        d="M -32 0 A 32 32 0 0 1 32 0"
        fill="none"
        stroke="url(#gold-huggies)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="0" cy="6" r="16" fill="url(#gold-huggies)" />
      <circle cx="-5" cy="0" r="6" fill="url(#highlight-huggies)" opacity="0.8" />
    </g>
  </Frame>
);

/* ============== PRODUCT 4 — Amber Lace Drop Earrings ============== */
export const AmberLaceArt = ({ className }) => (
  <Frame id="amber" className={className}>
    <ellipse cx="200" cy="250" rx="170" ry="180" fill="#2A2118" opacity="0.55" />
    {/* Filigree drop earring pair */}
    <g transform="translate(140 200)">
      {/* ear hook */}
      <path
        d="M 0 -30 Q 12 -30 12 -18"
        fill="none"
        stroke="url(#gold-amber)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* filigree teardrop body */}
      <path
        d="M 0 -18 Q -25 -10 -22 25 Q -10 70 0 75 Q 10 70 22 25 Q 25 -10 0 -18 Z"
        fill="url(#gold-amber)"
        opacity="0.85"
      />
      <path
        d="M 0 -10 Q -16 -4 -14 22 Q -6 56 0 60 Q 6 56 14 22 Q 16 -4 0 -10 Z"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <path
        d="M -8 0 Q 0 6 8 0"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M -10 20 Q 0 28 10 20"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M -8 40 Q 0 46 8 40"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <circle cx="-7" cy="0" r="3" fill="#FFF3CC" opacity="0.5" />
    </g>
    <g transform="translate(260 200)">
      <path
        d="M 0 -30 Q 12 -30 12 -18"
        fill="none"
        stroke="url(#gold-amber)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 0 -18 Q -25 -10 -22 25 Q -10 70 0 75 Q 10 70 22 25 Q 25 -10 0 -18 Z"
        fill="url(#gold-amber)"
        opacity="0.85"
      />
      <path
        d="M 0 -10 Q -16 -4 -14 22 Q -6 56 0 60 Q 6 56 14 22 Q 16 -4 0 -10 Z"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <path
        d="M -8 0 Q 0 6 8 0"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M -10 20 Q 0 28 10 20"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M -8 40 Q 0 46 8 40"
        fill="none"
        stroke="#7E5C2A"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <circle cx="-7" cy="0" r="3" fill="#FFF3CC" opacity="0.5" />
    </g>
  </Frame>
);

/* ============== PRODUCT 5 — Royal Heirloom Set ============== */
export const HeirloomSetArt = ({ className }) => (
  <Frame id="heirloom" className={className}>
    <ellipse cx="200" cy="250" rx="170" ry="190" fill="#2A2118" opacity="0.55" />
    {/* Gift box suggestion */}
    <rect x="120" y="290" width="160" height="120" fill="#1A140E" stroke="url(#gold-heirloom)" strokeWidth="1" opacity="0.7" />
    <rect x="120" y="290" width="160" height="20" fill="url(#gold-heirloom)" opacity="0.4" />
    <rect x="190" y="290" width="20" height="120" fill="url(#gold-heirloom)" opacity="0.4" />
    {/* Set: necklace + earrings above */}
    {/* Earrings */}
    <g transform="translate(150 180)">
      <circle cx="0" cy="0" r="12" fill="none" stroke="url(#gold-heirloom)" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="3" fill="url(#gold-heirloom)" />
      <circle cx="-3" cy="-3" r="2" fill="#FFF3CC" opacity="0.7" />
    </g>
    <g transform="translate(250 180)">
      <circle cx="0" cy="0" r="12" fill="none" stroke="url(#gold-heirloom)" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="3" fill="url(#gold-heirloom)" />
      <circle cx="-3" cy="-3" r="2" fill="#FFF3CC" opacity="0.7" />
    </g>
    {/* Necklace */}
    <path
      d="M 160 130 Q 200 165 240 130"
      fill="none"
      stroke="url(#gold-heirloom)"
      strokeWidth="1.8"
    />
    <g transform="translate(200 165)">
      <path
        d="M 0 -10 L 8 0 L 0 14 L -8 0 Z"
        fill="url(#gold-heirloom)"
        stroke="#7E5C2A"
        strokeWidth="0.5"
      />
      <path
        d="M 0 -6 L 4 0 L 0 8 L -4 0 Z"
        fill="#FFF3CC"
        opacity="0.7"
      />
    </g>
    {/* Sparkle */}
    <g transform="translate(120 130)">
      <path d="M 0 -5 L 1 -1 L 5 0 L 1 1 L 0 5 L -1 1 L -5 0 L -1 -1 Z" fill="#FFF3CC" />
    </g>
    <g transform="translate(280 250)">
      <path d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z" fill="#FFF3CC" opacity="0.7" />
    </g>
  </Frame>
);

/* ============== CATEGORY TILES ============== */
export const CategoryEarringsArt = ({ className }) => (
  <Frame id="cat-ear" className={className}>
    {/* Abstract ear silhouette with three earrings */}
    <path
      d="M 130 150 Q 100 220 130 320 Q 170 360 220 340"
      fill="none"
      stroke="#3A2E22"
      strokeWidth="2"
      opacity="0.6"
    />
    <g>
      {/* Stud */}
      <circle cx="180" cy="200" r="5" fill="url(#gold-cat-ear)" />
      <circle cx="178" cy="198" r="1.5" fill="#FFF3CC" />
      {/* Drop */}
      <path d="M 195 240 Q 200 240 200 246" fill="none" stroke="url(#gold-cat-ear)" strokeWidth="1.5" />
      <ellipse cx="200" cy="260" rx="5" ry="9" fill="url(#gold-cat-ear)" />
      {/* Hoop */}
      <circle cx="180" cy="290" r="14" fill="none" stroke="url(#gold-cat-ear)" strokeWidth="3" />
      <circle cx="174" cy="284" r="2" fill="#FFF3CC" opacity="0.6" />
    </g>
  </Frame>
);

export const CategoryNecklacesArt = ({ className }) => (
  <Frame id="cat-neck" className={className}>
    {/* Layered necklaces */}
    <path d="M 120 180 Q 200 230 280 180" fill="none" stroke="url(#gold-cat-neck)" strokeWidth="1.5" />
    <path d="M 110 200 Q 200 260 290 200" fill="none" stroke="url(#gold-cat-neck)" strokeWidth="1.5" />
    <path d="M 130 220 Q 200 270 270 220" fill="none" stroke="url(#gold-cat-neck)" strokeWidth="1.5" />
    <g transform="translate(200 250)">
      <polygon points="0,-10 7,0 0,12 -7,0" fill="url(#gold-cat-neck)" />
      <circle cx="-2" cy="-2" r="2" fill="#FFF3CC" opacity="0.8" />
    </g>
    <g transform="translate(200 285)">
      <circle r="4" fill="url(#gold-cat-neck)" />
    </g>
    <g transform="translate(200 305)">
      <path d="M 0 -4 L 4 0 L 0 6 L -4 0 Z" fill="url(#gold-cat-neck)" />
    </g>
  </Frame>
);

export const CategoryHuggiesArt = ({ className }) => (
  <Frame id="cat-hug" className={className}>
    {/* Three huggies in a row */}
    <g transform="translate(120 250)">
      <path d="M -25 0 A 25 25 0 0 1 25 0" fill="none" stroke="url(#gold-cat-hug)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="0" cy="6" r="10" fill="url(#gold-cat-hug)" />
    </g>
    <g transform="translate(200 250)">
      <path d="M -28 0 A 28 28 0 0 1 28 0" fill="none" stroke="url(#gold-cat-hug)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="0" cy="6" r="12" fill="url(#gold-cat-hug)" />
    </g>
    <g transform="translate(280 250)">
      <path d="M -30 0 A 30 30 0 0 1 30 0" fill="none" stroke="url(#gold-cat-hug)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="0" cy="6" r="14" fill="url(#gold-cat-hug)" />
    </g>
  </Frame>
);

/* ============== UGC REEL (vertical 9:16) ============== */
export const ReelEarArt = ({ className, variant = 0 }) => {
  const palette = [
    { bg: "#1F1A14", skin: "#C28A6B", gold: "#D4A957" },
    { bg: "#2A2118", skin: "#B57E5F", gold: "#E8B14C" },
    { bg: "#15110D", skin: "#D4A085", gold: "#C9A86A" },
    { bg: "#1A140E", skin: "#A87255", gold: "#F1D693" },
    { bg: "#2A2118", skin: "#C28A6B", gold: "#B58A4C" },
  ];
  const v = palette[variant % palette.length];
  return (
    <svg
      viewBox="0 0 300 533"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`reel-gold-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6E2A8" />
          <stop offset="50%" stopColor={`${v.gold}`} />
          <stop offset="100%" stopColor="#7E5C2A" />
        </linearGradient>
        <linearGradient id={`reel-skin-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.skin} />
          <stop offset="100%" stopColor="#7E5C45" />
        </linearGradient>
        <radialGradient id={`reel-spot-${variant}`} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#3A2E22" stopOpacity="0.7" />
          <stop offset="100%" stopColor={v.bg} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="533" fill={v.bg} />
      <rect width="300" height="533" fill={`url(#reel-spot-${variant})`} />
      {/* Hair back */}
      <path
        d="M60 80 Q 60 30 150 30 Q 240 30 240 80 L 240 300 Q 200 350 150 350 Q 100 350 60 300 Z"
        fill="#0F0B07"
        opacity="0.9"
      />
      {/* Face oval */}
      <ellipse cx="150" cy="230" rx="85" ry="115" fill={`url(#reel-skin-${variant})`} />
      {/* Cheek shadow */}
      <ellipse cx="150" cy="240" rx="80" ry="100" fill={v.bg} opacity="0.15" />
      {/* Eyes (closed/lashes) */}
      <path d="M 110 210 Q 122 205 134 210" fill="none" stroke="#1F1A14" strokeWidth="1.2" />
      <path d="M 166 210 Q 178 205 190 210" fill="none" stroke="#1F1A14" strokeWidth="1.2" />
      {/* Lips */}
      <path
        d="M 138 275 Q 150 282 162 275 Q 150 270 138 275 Z"
        fill="#8B3A2E"
        opacity="0.8"
      />
      {/* Neck */}
      <path
        d="M 120 340 L 120 420 L 180 420 L 180 340 Z"
        fill={`url(#reel-skin-${variant})`}
        opacity="0.9"
      />
      {/* Earring — varies by variant */}
      {variant % 3 === 0 && (
        <g transform="translate(95 235)">
          <circle cx="0" cy="0" r="14" fill="none" stroke={`url(#reel-gold-${variant})`} strokeWidth="3" />
          <circle cx="-4" cy="-4" r="2" fill="#FFF3CC" />
        </g>
      )}
      {variant % 3 === 1 && (
        <g transform="translate(95 235)">
          <path d="M 0 -10 L 6 0 L 0 14 L -6 0 Z" fill={`url(#reel-gold-${variant})`} />
          <circle cx="-2" cy="-2" r="1.5" fill="#FFF3CC" />
        </g>
      )}
      {variant % 3 === 2 && (
        <g transform="translate(95 235)">
          <path d="M 0 -8 Q 5 -8 5 -2 L 5 6 Q 5 12 0 16 Q -5 12 -5 6 L -5 -2 Q -5 -8 0 -8 Z" fill={`url(#reel-gold-${variant})`} />
          <circle cx="-2" cy="-2" r="1.5" fill="#FFF3CC" />
        </g>
      )}
      {/* Necklace */}
      <path
        d="M 120 380 Q 150 410 180 380"
        fill="none"
        stroke={`url(#reel-gold-${variant})`}
        strokeWidth="1.5"
      />
      <g transform="translate(150 408)">
        <circle r="3" fill={`url(#reel-gold-${variant})`} />
      </g>
    </svg>
  );
};

/* ============== STORY IMAGE (left side of brand split) ============== */
export const StoryArt = ({ className }) => (
  <Frame id="story" className={className}>
    {/* Soft warm window light */}
    <rect width="400" height="500" fill="#2A2118" />
    <ellipse cx="280" cy="120" rx="220" ry="180" fill="#5A4530" opacity="0.5" />
    {/* Hands holding a ring box suggestion */}
    <ellipse cx="200" cy="380" rx="140" ry="40" fill="#3A2E22" opacity="0.6" />
    {/* Small ring */}
    <g transform="translate(200 280)">
      <circle r="32" fill="none" stroke="url(#gold-story)" strokeWidth="6" />
      <circle r="32" fill="url(#highlight-story)" opacity="0.3" />
      <g transform="translate(0 -36)">
        <polygon points="0,-14 10,0 0,12 -10,0" fill="url(#gold-story)" />
        <circle cx="-3" cy="-3" r="2" fill="#FFF3CC" />
      </g>
    </g>
    {/* Subtle dust particles */}
    <circle cx="100" cy="100" r="1.5" fill="#F1D693" opacity="0.6" />
    <circle cx="320" cy="160" r="1" fill="#F1D693" opacity="0.4" />
    <circle cx="80" cy="240" r="1" fill="#F1D693" opacity="0.4" />
    <circle cx="340" cy="300" r="1.2" fill="#F1D693" opacity="0.5" />
  </Frame>
);

/* ============== Newsletter / About decorative ============== */
export const TextureGoldArt = ({ className }) => (
  <svg
    viewBox="0 0 800 200"
    preserveAspectRatio="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="tex-gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8B6A3A" stopOpacity="0" />
        <stop offset="50%" stopColor="#D4A957" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8B6A3A" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="800" height="200" fill="url(#tex-gold)" />
  </svg>
);
