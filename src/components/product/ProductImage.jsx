import React from "react";
import { cn } from "@/lib/utils";

/**
 * ProductImage — renders an inline SVG that depicts a piece of gold jewelry
 * on a warm dark gradient background. Each artwork is keyed by name and
 * designed to look intentional, editorial, and on-brand.
 *
 * `tone` toggles between gold and silver finishes.
 * `variant` selects an alternate composition for the same product (used as
 * the "hover / second image" on product cards).
 */
export default function ProductImage({
  artwork = "earCuff",
  tone = "gold",
  variant = 0,
  className,
  showCaption = false,
  caption,
}) {
  const palette = tone === "silver" ? silverPalette : goldPalette;
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label={caption || "Velmora jewelry"}
      >
        <defs>
          <radialGradient id={`bg-${artwork}-${variant}-${tone}`} cx="50%" cy="42%" r="80%">
            <stop offset="0%" stopColor={palette.bgTop} />
            <stop offset="55%" stopColor={palette.bgMid} />
            <stop offset="100%" stopColor={palette.bgBottom} />
          </radialGradient>
          <linearGradient id={`gold-${artwork}-${variant}-${tone}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.metalHi} />
            <stop offset="45%" stopColor={palette.metalMid} />
            <stop offset="100%" stopColor={palette.metalLo} />
          </linearGradient>
          <linearGradient id={`gold2-${artwork}-${variant}-${tone}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={palette.metalHi} />
            <stop offset="100%" stopColor={palette.metalLo} />
          </linearGradient>
          <radialGradient id={`shine-${artwork}-${variant}-${tone}`} cx="35%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <radialGradient id={`crystal-${artwork}-${variant}-${tone}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor={palette.crystal} />
            <stop offset="100%" stopColor={palette.crystalLo} />
          </radialGradient>
          <radialGradient id={`crystal-multi-${artwork}-${variant}-${tone}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor={palette.crystal} />
            <stop offset="100%" stopColor={palette.crystalLo} />
          </radialGradient>
        </defs>

        <rect width="400" height="500" fill={`url(#bg-${artwork}-${variant}-${tone})`} />

        {/* Soft warm light pool */}
        <ellipse cx="200" cy="170" rx="240" ry="150" fill="rgba(229,212,168,0.12)" />

        {renderArtwork(artwork, variant, tone, palette)}

        {/* Glassy top-light overlay for editorial feel */}
        <rect
          width="400"
          height="500"
          fill={`url(#shine-${artwork}-${variant}-${tone})`}
          opacity="0.35"
        />
      </svg>

      {showCaption && caption ? (
        <div className="absolute bottom-4 left-4 right-4 text-cream-50/90 font-serif text-lg italic leading-tight">
          {caption}
        </div>
      ) : null}
    </div>
  );
}

const goldPalette = {
  bgTop: "#3A2A20",
  bgMid: "#241A14",
  bgBottom: "#140C08",
  metalHi: "#F5DCA0",
  metalMid: "#C9A86A",
  metalLo: "#7A5A2C",
  crystal: "#F2E1A6",
  crystalLo: "#9C7E45",
};

const silverPalette = {
  bgTop: "#3D3A36",
  bgMid: "#26241F",
  bgBottom: "#161412",
  metalHi: "#F2EFE8",
  metalMid: "#BDB9B0",
  metalLo: "#6E6A60",
  crystal: "#E8E6E2",
  crystalLo: "#8B877E",
};

function renderArtwork(artwork, variant, tone, palette) {
  const gid = `${artwork}-${variant}-${tone}`;
  switch (artwork) {
    case "earCuff":
      return earCuff(gid, palette);
    case "floralNecklace":
      return floralNecklace(gid, palette, variant);
    case "huggieSphere":
      return huggieSphere(gid, palette, variant);
    case "filigreeDrop":
      return filigreeDrop(gid, palette, variant);
    case "heirloomSet":
      return heirloomSet(gid, palette, variant);
    case "pearlStud":
      return pearlStud(gid, palette);
    case "layerChain":
      return layerChain(gid, palette, variant);
    case "slimHoop":
      return slimHoop(gid, palette, variant);
    case "paveHuggie":
      return paveHuggie(gid, palette, variant);
    case "duoHuggie":
      return duoHuggie(gid, palette, variant);
    case "crystalPendant":
      return crystalPendant(gid, palette, variant);
    case "catEarrings":
      return catEarrings(gid, palette);
    case "catNecklace":
      return catNecklace(gid, palette);
    case "catHuggie":
      return catHuggie(gid, palette);
    default:
      return earCuff(gid, palette);
  }
}

/* ------------------------------------------------------------------ */
/*  Individual artworks                                                */
/* ------------------------------------------------------------------ */

function earCuff(gid, p) {
  return (
    <g>
      {/* Decorative arc — ear shape */}
      <path
        d="M 200 80 C 280 80 320 180 320 280 C 320 380 260 440 200 440"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M 200 80 C 280 80 320 180 320 280 C 320 380 260 440 200 440"
        fill="none"
        stroke={`url(#shine-${gid})`}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Inner cuff */}
      <path
        d="M 200 110 C 268 110 300 200 300 280 C 300 360 250 410 200 410"
        fill="none"
        stroke={`url(#gold2-${gid})`}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Crystal */}
      <circle cx="200" cy="80" r="14" fill={`url(#crystal-${gid})`} />
      <circle cx="196" cy="76" r="4" fill="rgba(255,255,255,0.7)" />
      {/* Smaller accent crystal */}
      <circle cx="278" cy="240" r="6" fill={`url(#crystal-${gid})`} />
    </g>
  );
}

function floralNecklace(gid, p, variant) {
  if (variant === 1) {
    // Side view of chain with pendant
    return (
      <g>
        <path
          d="M 60 60 Q 200 140 340 60"
          fill="none"
          stroke={`url(#gold-${gid})`}
          strokeWidth="2.5"
        />
        {/* Pendant floral cluster */}
        <g transform="translate(200 260)">
          <circle r="10" fill={`url(#crystal-${gid})`} />
          <circle cx="-26" cy="-6" r="9" fill={`url(#crystal-multi-${gid})`} />
          <circle cx="26" cy="-6" r="9" fill={`url(#crystal-multi-${gid})`} />
          <circle cx="-14" cy="22" r="8" fill={`url(#crystal-multi-${gid})`} />
          <circle cx="14" cy="22" r="8" fill={`url(#crystal-multi-${gid})`} />
          <circle cx="0" cy="-20" r="7" fill={`url(#crystal-multi-${gid})`} />
          {/* leaves */}
          <ellipse cx="-30" cy="20" rx="6" ry="3" fill={`url(#gold-${gid})`} transform="rotate(-30 -30 20)" />
          <ellipse cx="30" cy="20" rx="6" ry="3" fill={`url(#gold-${gid})`} transform="rotate(30 30 20)" />
          <circle r="3" fill={`url(#gold-${gid})`} />
        </g>
        <path
          d="M 60 60 Q 200 240 340 60"
          fill="none"
          stroke={`url(#gold-${gid})`}
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity="0.6"
        />
      </g>
    );
  }
  // Default: full pendant on chain
  return (
    <g>
      <path
        d="M 40 60 C 40 220 200 280 360 60"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="2"
      />
      <path
        d="M 40 60 C 40 220 200 280 360 60"
        fill="none"
        stroke={`url(#shine-${gid})`}
        strokeWidth="1"
        opacity="0.5"
      />
      <g transform="translate(200 290)">
        {/* Flower */}
        {[0, 60, 120, 180, 240, 300].map((rot) => (
          <ellipse
            key={rot}
            rx="14"
            ry="8"
            fill={`url(#crystal-multi-${gid})`}
            transform={`rotate(${rot}) translate(0 -16)`}
            opacity="0.9"
          />
        ))}
        <circle r="8" fill={`url(#crystal-${gid})`} />
        <circle r="3" fill="#FFF" opacity="0.9" />
        {/* Leaves */}
        <ellipse cx="-26" cy="14" rx="8" ry="4" fill={`url(#gold-${gid})`} transform="rotate(-25 -26 14)" />
        <ellipse cx="26" cy="14" rx="8" ry="4" fill={`url(#gold-${gid})`} transform="rotate(25 26 14)" />
      </g>
    </g>
  );
}

function huggieSphere(gid, p, variant) {
  // A pair of chunky domed hoops
  const leftCx = variant === 1 ? 200 : 145;
  const rightCx = variant === 1 ? 280 : 255;
  return (
    <g>
      {[
        { cx: leftCx, cy: 250 },
        { cx: rightCx, cy: 250 },
      ].map(({ cx, cy }, i) => (
        <g key={i}>
          {/* Outer ring */}
          <circle cx={cx} cy={cy} r="60" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="14" />
          {/* Inner ring highlight */}
          <circle cx={cx} cy={cy} r="60" fill="none" stroke={`url(#shine-${gid})`} strokeWidth="3" opacity="0.7" />
          {/* Hinge post */}
          <rect x={cx - 4} y={cy - 64} width="8" height="10" fill={`url(#gold-${gid})`} />
          {/* Inner shadow ring */}
          <circle cx={cx} cy={cy} r="52" fill="none" stroke={p.metalLo} strokeWidth="1" opacity="0.5" />
          {/* Catch highlight */}
          <ellipse cx={cx - 18} cy={cy - 22} rx="18" ry="6" fill="rgba(255,255,255,0.35)" />
        </g>
      ))}
    </g>
  );
}

function filigreeDrop(gid, p, variant) {
  return (
    <g>
      {[150, 250].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 0)`}>
          {/* Post + ball */}
          <circle cx="0" cy="80" r="5" fill={`url(#gold-${gid})`} />
          <line x1="0" y1="85" x2="0" y2="120" stroke={`url(#gold-${gid})`} strokeWidth="2" />
          {/* Teardrop filigree */}
          <path
            d="M 0 120 C -28 140 -32 200 -22 240 C -10 280 10 280 22 240 C 32 200 28 140 0 120 Z"
            fill={`url(#gold-${gid})`}
            opacity="0.95"
          />
          {/* Filigree cutouts */}
          {[140, 175, 210, 245].map((y, j) => (
            <ellipse
              key={j}
              cx="0"
              cy={y}
              rx="6"
              ry="3"
              fill={p.bgMid}
              opacity="0.7"
            />
          ))}
          {/* Decorative swirls */}
          <path
            d="M -16 170 Q -8 175 -16 185 M 16 170 Q 8 175 16 185"
            fill="none"
            stroke={p.bgMid}
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Highlight */}
          <path
            d="M -10 140 Q -2 180 -10 230"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </g>
  );
}

function heirloomSet(gid, p, variant) {
  return (
    <g>
      {/* Gift box outline */}
      <rect
        x="80"
        y="280"
        width="240"
        height="120"
        rx="3"
        fill={p.bgTop}
        stroke={`url(#gold-${gid})`}
        strokeWidth="1.5"
        opacity="0.9"
      />
      <rect
        x="80"
        y="280"
        width="240"
        height="22"
        fill={`url(#gold-${gid})`}
        opacity="0.8"
      />
      <line x1="200" y1="280" x2="200" y2="400" stroke={`url(#gold-${gid})`} strokeWidth="1.5" />
      <line x1="80" y1="291" x2="320" y2="291" stroke={p.bgMid} strokeWidth="1" opacity="0.6" />
      {/* Ribbon bow */}
      <g transform="translate(200 290)">
        <path d="M -22 0 Q -30 -12 -16 -10 Q -8 -2 -22 0 Z" fill={`url(#gold-${gid})`} />
        <path d="M 22 0 Q 30 -12 16 -10 Q 8 -2 22 0 Z" fill={`url(#gold-${gid})`} />
        <circle r="3" fill={`url(#gold-${gid})`} />
      </g>
      {/* Drop earrings on top */}
      <g transform="translate(150 200)">
        <circle cx="0" cy="0" r="4" fill={`url(#gold-${gid})`} />
        <line x1="0" y1="4" x2="0" y2="14" stroke={`url(#gold-${gid})`} strokeWidth="1.5" />
        <path d="M 0 14 C -8 18 -10 30 -6 38 C -2 46 2 46 6 38 C 10 30 8 18 0 14 Z" fill={`url(#gold-${gid})`} />
      </g>
      <g transform="translate(250 200)">
        <circle cx="0" cy="0" r="4" fill={`url(#gold-${gid})`} />
        <line x1="0" y1="4" x2="0" y2="14" stroke={`url(#gold-${gid})`} strokeWidth="1.5" />
        <path d="M 0 14 C -8 18 -10 30 -6 38 C -2 46 2 46 6 38 C 10 30 8 18 0 14 Z" fill={`url(#gold-${gid})`} />
      </g>
      {/* Pendant */}
      <g transform="translate(200 230)">
        <line x1="0" y1="-30" x2="0" y2="0" stroke={`url(#gold-${gid})`} strokeWidth="1.5" />
        <circle r="6" fill={`url(#crystal-${gid})`} />
      </g>
    </g>
  );
}

function pearlStud(gid, p) {
  return (
    <g>
      {[150, 250].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="250" r="28" fill={`url(#crystal-${gid})`} />
          <circle cx={cx - 7} cy="244" r="8" fill="rgba(255,255,255,0.85)" />
          <circle cx={cx} cy="250" r="28" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
}

function layerChain(gid, p, variant) {
  return (
    <g>
      <path
        d="M 30 200 C 30 320 200 360 370 200"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="2"
      />
      <path
        d="M 50 250 C 50 340 200 380 350 250"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="1.5"
        opacity="0.85"
      />
      <path
        d="M 70 300 C 70 360 200 390 330 300"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="1.2"
        opacity="0.7"
      />
      <circle cx="200" cy="365" r="4" fill={`url(#gold-${gid})`} />
    </g>
  );
}

function slimHoop(gid, p, variant) {
  return (
    <g>
      {[150, 250].map((cx, i) => (
        <g key={i}>
          <ellipse
            cx={cx}
            cy="250"
            rx="50"
            ry="55"
            fill="none"
            stroke={`url(#gold-${gid})`}
            strokeWidth="5"
          />
          <ellipse
            cx={cx - 14}
            cy="226"
            rx="12"
            ry="5"
            fill="rgba(255,255,255,0.4)"
          />
        </g>
      ))}
    </g>
  );
}

function paveHuggie(gid, p, variant) {
  return (
    <g>
      {[150, 250].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="250" r="55" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="10" />
          {Array.from({ length: 16 }).map((_, j) => {
            const angle = (j / 16) * Math.PI * 2;
            const x = cx + Math.cos(angle) * 55;
            const y = 250 + Math.sin(angle) * 55;
            return <circle key={j} cx={x} cy={y} r="3" fill={`url(#crystal-${gid})`} />;
          })}
        </g>
      ))}
    </g>
  );
}

function duoHuggie(gid, p, variant) {
  return (
    <g>
      {[150, 250].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="250" r="50" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="9" />
          <circle cx={cx} cy="200" r="6" fill={`url(#crystal-${gid})`} />
          <circle cx={cx} cy="300" r="5" fill={`url(#crystal-${gid})`} />
        </g>
      ))}
    </g>
  );
}

function crystalPendant(gid, p, variant) {
  return (
    <g>
      <path
        d="M 50 80 C 50 240 200 300 350 80"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="1.5"
      />
      <g transform="translate(200 290)">
        <circle r="22" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="3" />
        <circle r="14" fill={`url(#crystal-${gid})`} />
        <circle cx="-3" cy="-3" r="4" fill="rgba(255,255,255,0.9)" />
        <rect x="-2" y="-32" width="4" height="10" fill={`url(#gold-${gid})`} />
      </g>
    </g>
  );
}

/* Category tile artworks — used in the "Shop by category" section.
   These are full-bleed editorial compositions, not product shots. */

function catEarrings(gid, p) {
  return (
    <g>
      {/* Decorative ear silhouette */}
      <path
        d="M 200 60 C 280 60 320 180 320 320 C 320 400 270 440 220 440"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="4"
        opacity="0.9"
      />
      <path
        d="M 200 90 C 270 90 305 190 305 310 C 305 380 260 415 220 415"
        fill="none"
        stroke={`url(#gold2-${gid})`}
        strokeWidth="2"
        opacity="0.7"
      />
      {/* Earring 1: hoop with charm */}
      <g transform="translate(220 280)">
        <circle r="22" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="3" />
        <circle r="6" fill={`url(#crystal-${gid})`} />
        <line x1="0" y1="22" x2="0" y2="42" stroke={`url(#gold-${gid})`} strokeWidth="1.5" />
        <circle cx="0" cy="46" r="5" fill={`url(#crystal-${gid})`} />
      </g>
      {/* Earring 2: ear cuff */}
      <g transform="translate(280 200)">
        <path
          d="M 0 0 C 22 0 30 16 30 30 C 30 44 22 56 0 56"
          fill="none"
          stroke={`url(#gold-${gid})`}
          strokeWidth="3"
        />
        <circle cx="30" cy="30" r="4" fill={`url(#crystal-${gid})`} />
      </g>
    </g>
  );
}

function catNecklace(gid, p) {
  return (
    <g>
      <path
        d="M 30 60 C 30 200 200 270 370 60"
        fill="none"
        stroke={`url(#gold-${gid})`}
        strokeWidth="1.5"
      />
      <path
        d="M 30 60 C 30 200 200 270 370 60"
        fill="none"
        stroke={`url(#shine-${gid})`}
        strokeWidth="0.8"
        opacity="0.6"
      />
      <g transform="translate(200 280)">
        {/* Pendant — geometric drop */}
        <line x1="0" y1="-30" x2="0" y2="0" stroke={`url(#gold-${gid})`} strokeWidth="1.5" />
        <path
          d="M 0 0 L -16 16 L 0 50 L 16 16 Z"
          fill={`url(#crystal-${gid})`}
          stroke={`url(#gold-${gid})`}
          strokeWidth="1.5"
        />
        <line x1="0" y1="6" x2="0" y2="44" stroke={`url(#gold-${gid})`} strokeWidth="0.8" opacity="0.6" />
      </g>
      {/* Background bokeh */}
      <circle cx="80" cy="380" r="2" fill={p.metalHi} opacity="0.4" />
      <circle cx="320" cy="360" r="2" fill={p.metalHi} opacity="0.4" />
      <circle cx="120" cy="420" r="1.5" fill={p.metalHi} opacity="0.3" />
    </g>
  );
}

function catHuggie(gid, p) {
  return (
    <g>
      <ellipse cx="200" cy="260" rx="90" ry="100" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="10" />
      <ellipse cx="200" cy="260" rx="90" ry="100" fill="none" stroke={`url(#shine-${gid})`} strokeWidth="2" opacity="0.5" />
      <ellipse cx="170" cy="200" rx="20" ry="8" fill="rgba(255,255,255,0.4)" />
      <rect x="196" y="150" width="8" height="14" fill={`url(#gold-${gid})`} />
      {/* Second huggie behind */}
      <ellipse cx="280" cy="300" rx="40" ry="46" fill="none" stroke={`url(#gold-${gid})`} strokeWidth="6" opacity="0.6" />
    </g>
  );
}
