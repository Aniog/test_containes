// Editorial SVG illustrations for Velmora products.
// Each illustration renders warm gold jewelry on a curated warm background.
// All SVGs are self-contained and scale to the parent container.

import React from "react";

// --- Shared gradient/filter definitions (inlined per SVG to stay self-contained) ---

const GOLD_GRADIENT = (
  <>
    <defs>
      <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F2DCA0" />
        <stop offset="35%" stopColor="#D9B97A" />
        <stop offset="65%" stopColor="#B08A4A" />
        <stop offset="100%" stopColor="#8A6A35" />
      </linearGradient>
      <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E6D2A8" />
        <stop offset="100%" stopColor="#8A6A35" />
      </linearGradient>
      <radialGradient id="bgWarm" cx="50%" cy="40%" r="80%">
        <stop offset="0%" stopColor="#3A2E22" />
        <stop offset="60%" stopColor="#251C13" />
        <stop offset="100%" stopColor="#15100A" />
      </radialGradient>
      <radialGradient id="bgLight" cx="50%" cy="35%" r="80%">
        <stop offset="0%" stopColor="#F5E9D2" />
        <stop offset="100%" stopColor="#D9C5A0" />
      </radialGradient>
      <radialGradient id="bgCream" cx="50%" cy="40%" r="80%">
        <stop offset="0%" stopColor="#FAF1DC" />
        <stop offset="100%" stopColor="#E6D2A8" />
      </radialGradient>
      <radialGradient id="crystalShine" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="40%" stopColor="#F2DCA0" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#B08A4A" stopOpacity="0.2" />
      </radialGradient>
    </defs>
  </>
);

// --- 1) Vivid Aura — ear cuff with crystal ---
export function EarCuffArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {/* soft warm vignette */}
      <ellipse cx="200" cy="260" rx="180" ry="200" fill="url(#bgLight)" opacity={onModel ? 0.0 : 0.4} />
      {onModel && (
        <>
          {/* Stylized model silhouette (back of head with hair up) */}
          <ellipse cx="200" cy="240" rx="105" ry="135" fill="#2A1F15" />
          <ellipse cx="200" cy="240" rx="90" ry="120" fill="#3A2B1E" />
          {/* hair sweep */}
          <path d="M 95 200 Q 110 120 200 105 Q 290 120 305 200 Q 300 170 200 160 Q 100 170 95 200 Z" fill="#1A130C" />
          {/* jaw/neck hint */}
          <path d="M 130 360 Q 200 410 270 360 L 270 500 L 130 500 Z" fill="#1F1A14" />
          {/* subtle warm light on cheek */}
          <ellipse cx="240" cy="260" rx="40" ry="60" fill="#4A3525" opacity="0.6" />
        </>
      )}
      {/* Ear cuff arc — hugs the ear */}
      <g transform="translate(200 250)">
        {/* main arc */}
        <path
          d="M -70 -50 C -90 0, -90 60, -50 90 C -10 110, 30 100, 60 70"
          fill="none"
          stroke="url(#goldShine)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        {/* secondary thinner arc */}
        <path
          d="M -55 -30 C -70 10, -65 50, -30 70"
          fill="none"
          stroke="url(#goldRim)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* crystal accent */}
        <g transform="translate(50 65)">
          <circle r="11" fill="url(#goldShine)" />
          <circle r="6" fill="url(#crystalShine)" />
          <circle r="2" cx="-2" cy="-2" fill="#FFFFFF" opacity="0.95" />
        </g>
        {/* tiny decorative beads */}
        <circle cx="-65" cy="-45" r="3.5" fill="url(#goldShine)" />
        <circle cx="-78" cy="0" r="2.5" fill="url(#goldShine)" />
      </g>
    </svg>
  );
}

// --- 2) Majestic Flora — floral crystal necklace ---
export function FloralNecklaceArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          {/* Model bust silhouette */}
          <ellipse cx="200" cy="180" rx="100" ry="125" fill="#2A1F15" />
          <path d="M 120 280 Q 200 340 280 280 L 280 500 L 120 500 Z" fill="#1F1A14" />
          <ellipse cx="200" cy="180" rx="85" ry="110" fill="#3A2B1E" />
          <ellipse cx="200" cy="170" rx="60" ry="80" fill="#4A3525" />
          {/* soft hair flow */}
          <path d="M 110 130 Q 200 80 290 130 Q 300 200 280 250 L 260 200 Q 200 150 140 200 L 120 250 Q 100 200 110 130 Z" fill="#1A130C" />
        </>
      )}
      {/* Chain — draped curve */}
      <g>
        <path
          d="M 60 110 Q 200 260 340 110"
          fill="none"
          stroke="url(#goldRim)"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <path
          d="M 60 110 Q 200 270 340 110"
          fill="none"
          stroke="url(#goldRim)"
          strokeWidth="1.5"
          opacity="0.85"
        />
        {/* chain links — dotted along path */}
        {Array.from({ length: 28 }).map((_, i) => {
          const t = i / 27;
          const x = 60 + 280 * t;
          const y = 110 + 160 * Math.sin(Math.PI * t) * (onModel ? 1.0 : 1.0);
          return <circle key={i} cx={x} cy={y} r="2" fill="url(#goldShine)" />;
        })}
      </g>
      {/* Pendant — floral cluster */}
      <g transform="translate(200 285)">
        {/* central flower */}
        <g>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx={Math.cos((a * Math.PI) / 180) * 18}
              cy={Math.sin((a * Math.PI) / 180) * 18}
              rx="10"
              ry="14"
              transform={`rotate(${a} ${Math.cos((a * Math.PI) / 180) * 18} ${Math.sin((a * Math.PI) / 180) * 18})`}
              fill="url(#crystalShine)"
              opacity="0.95"
            />
          ))}
          <circle r="8" fill="url(#goldShine)" />
          <circle r="3" cx="-1" cy="-1" fill="#FFFFFF" opacity="0.9" />
        </g>
        {/* side smaller flowers */}
        <g transform="translate(-55 5)">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx={Math.cos((a * Math.PI) / 180) * 10}
              cy={Math.sin((a * Math.PI) / 180) * 10}
              rx="6"
              ry="9"
              transform={`rotate(${a} ${Math.cos((a * Math.PI) / 180) * 10} ${Math.sin((a * Math.PI) / 180) * 10})`}
              fill="url(#crystalShine)"
              opacity="0.9"
            />
          ))}
          <circle r="5" fill="url(#goldShine)" />
        </g>
        <g transform="translate(55 5)">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx={Math.cos((a * Math.PI) / 180) * 10}
              cy={Math.sin((a * Math.PI) / 180) * 10}
              rx="6"
              ry="9"
              transform={`rotate(${a} ${Math.cos((a * Math.PI) / 180) * 10} ${Math.sin((a * Math.PI) / 180) * 10})`}
              fill="url(#crystalShine)"
              opacity="0.9"
            />
          ))}
          <circle r="5" fill="url(#goldShine)" />
        </g>
        {/* tiny leaves */}
        <path d="M -30 25 Q -45 35 -50 50" fill="none" stroke="url(#goldShine)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 30 25 Q 45 35 50 50" fill="none" stroke="url(#goldShine)" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="-48" cy="48" rx="5" ry="9" transform="rotate(-30 -48 48)" fill="url(#goldShine)" />
        <ellipse cx="48" cy="48" rx="5" ry="9" transform="rotate(30 48 48)" fill="url(#goldShine)" />
      </g>
    </svg>
  );
}

// --- 3) Golden Sphere Huggies ---
export function SphereHuggieArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          <ellipse cx="200" cy="200" rx="95" ry="115" fill="#2A1F15" />
          <ellipse cx="200" cy="200" rx="80" ry="100" fill="#3A2B1E" />
          <path d="M 110 160 Q 200 110 290 160 Q 295 220 275 270 L 255 220 Q 200 180 145 220 L 125 270 Q 105 220 110 160 Z" fill="#1A130C" />
          <path d="M 130 320 Q 200 370 270 320 L 270 500 L 130 500 Z" fill="#1F1A14" />
        </>
      )}
      {/* Pair of huggies — left and right */}
      <HuggieShape x={120} y={250} />
      <HuggieShape x={280} y={250} />
    </svg>
  );
}

function HuggieShape({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* thick hoop (huggie) */}
      <circle r="38" fill="none" stroke="url(#goldShine)" strokeWidth="14" />
      {/* inner ring detail */}
      <circle r="29" fill="none" stroke="url(#goldRim)" strokeWidth="1" opacity="0.6" />
      {/* hinge dot */}
      <circle cx="35" cy="-12" r="3.5" fill="url(#goldShine)" />
      {/* catch */}
      <circle cx="32" cy="14" r="2" fill="#8A6A35" />
      {/* highlight */}
      <ellipse cx="-12" cy="-18" rx="10" ry="4" fill="#F2DCA0" opacity="0.7" />
    </g>
  );
}

// --- 4) Amber Lace Earrings (filigree drop) ---
export function LaceDropArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          <ellipse cx="200" cy="180" rx="90" ry="110" fill="#2A1F15" />
          <ellipse cx="200" cy="180" rx="78" ry="98" fill="#3A2B1E" />
          <path d="M 120 130 Q 200 80 280 130 Q 285 200 265 240 L 250 200 Q 200 160 150 200 L 135 240 Q 115 200 120 130 Z" fill="#1A130C" />
        </>
      )}
      {/* Two drop earrings */}
      <DropEarring x={135} y={250} />
      <DropEarring x={265} y={250} />
    </svg>
  );
}

function DropEarring({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* french hook */}
      <path d="M 0 -55 C 12 -55, 18 -45, 18 -32" fill="none" stroke="url(#goldShine)" strokeWidth="2.5" strokeLinecap="round" />
      {/* top connector */}
      <circle cx="0" cy="-25" r="4" fill="url(#goldShine)" />
      {/* filigree teardrop frame */}
      <g transform="translate(0 25)">
        <path
          d="M 0 -28 C 22 -22, 30 0, 22 22 C 14 42, 0 50, 0 50 C 0 50, -14 42, -22 22 C -30 0, -22 -22, 0 -28 Z"
          fill="none"
          stroke="url(#goldShine)"
          strokeWidth="2"
        />
        {/* inner filigree scrollwork */}
        <path
          d="M 0 -18 C 14 -14, 18 0, 12 18 C 6 32, 0 38, 0 38 C 0 38, -6 32, -12 18 C -18 0, -14 -14, 0 -18 Z"
          fill="none"
          stroke="url(#goldRim)"
          strokeWidth="1"
          opacity="0.7"
        />
        {/* spiral */}
        <path
          d="M 0 0 Q 8 -4, 6 4 Q 0 8, -4 4 Q -6 -2, 0 0"
          fill="none"
          stroke="url(#goldShine)"
          strokeWidth="1.2"
        />
        <circle r="2" fill="url(#goldShine)" />
        {/* small dots along the edge */}
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const r = 26;
          return <circle key={i} cx={Math.cos(a) * r} cy={Math.sin(a) * r - 5} r="1.2" fill="url(#goldShine)" />;
        })}
      </g>
    </g>
  );
}

// --- 5) Royal Heirloom Set (gift box) ---
export function HeirloomSetArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          <ellipse cx="200" cy="180" rx="90" ry="110" fill="#2A1F15" />
          <ellipse cx="200" cy="180" rx="78" ry="98" fill="#3A2B1E" />
          <path d="M 120 130 Q 200 80 280 130 Q 285 200 265 240 L 250 200 Q 200 160 150 200 L 135 240 Q 115 200 120 130 Z" fill="#1A130C" />
        </>
      )}
      {/* Gift box composition */}
      <g transform="translate(200 260)">
        {/* box base shadow */}
        <ellipse cx="0" cy="120" rx="160" ry="20" fill="#1A130C" opacity="0.4" />
        {/* box bottom */}
        <rect x="-150" y="-20" width="300" height="140" fill="url(#bgWarm)" stroke="url(#goldShine)" strokeWidth="1.5" />
        {/* box lid */}
        <rect x="-160" y="-50" width="320" height="40" fill="url(#bgWarm)" stroke="url(#goldShine)" strokeWidth="1.5" />
        {/* ribbon vertical */}
        <rect x="-10" y="-50" width="20" height="170" fill="url(#goldShine)" opacity="0.85" />
        {/* ribbon horizontal on lid */}
        <rect x="-160" y="-32" width="320" height="6" fill="url(#goldShine)" opacity="0.85" />
        {/* bow */}
        <g transform="translate(0 -55)">
          <ellipse cx="-22" cy="0" rx="22" ry="14" fill="url(#goldShine)" />
          <ellipse cx="22" cy="0" rx="22" ry="14" fill="url(#goldShine)" />
          <circle r="6" fill="url(#goldShine)" />
          <path d="M -6 0 Q 0 12, 6 0" fill="url(#goldDeep)" />
        </g>
        {/* mini monogram */}
        <text
          x="100"
          y="60"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="22"
          fill="url(#goldShine)"
          opacity="0.7"
        >
          V
        </text>
        {/* sparkles */}
        <g opacity="0.6">
          <circle cx="-120" cy="-15" r="1.5" fill="#F2DCA0" />
          <circle cx="120" cy="-15" r="1.5" fill="#F2DCA0" />
          <circle cx="-90" cy="90" r="1" fill="#F2DCA0" />
          <circle cx="90" cy="90" r="1" fill="#F2DCA0" />
        </g>
      </g>
      {/* small earring + necklace hint floating above */}
      <g transform="translate(110 110)" opacity="0.85">
        <circle r="8" fill="none" stroke="url(#goldShine)" strokeWidth="3" />
        <circle r="2" cx="-2" cy="-2" fill="#F2DCA0" />
      </g>
      <g transform="translate(290 110)" opacity="0.85">
        <path d="M 0 0 Q 10 12, 0 20 Q -10 12, 0 0 Z" fill="url(#crystalShine)" />
        <circle r="2" fill="url(#goldShine)" />
      </g>
    </svg>
  );
}

// --- 6) Petal Chain Necklace ---
export function PetalChainArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          <ellipse cx="200" cy="180" rx="90" ry="110" fill="#2A1F15" />
          <ellipse cx="200" cy="180" rx="78" ry="98" fill="#3A2B1E" />
          <path d="M 120 130 Q 200 80 280 130 Q 285 200 265 240 L 250 200 Q 200 160 150 200 L 135 240 Q 115 200 120 130 Z" fill="#1A130C" />
        </>
      )}
      {/* Chain */}
      <g>
        <path d="M 70 130 Q 200 230 330 130" fill="none" stroke="url(#goldRim)" strokeWidth="1.2" opacity="0.85" />
        {Array.from({ length: 40 }).map((_, i) => {
          const t = i / 39;
          const x = 70 + 260 * t;
          const y = 130 + 100 * Math.sin(Math.PI * t);
          return <circle key={i} cx={x} cy={y} r="1.6" fill="url(#goldShine)" />;
        })}
      </g>
      {/* Petal pendant */}
      <g transform="translate(200 240)">
        <path
          d="M 0 -22 C 14 -18, 18 0, 12 18 C 6 32, 0 36, 0 36 C 0 36, -6 32, -12 18 C -18 0, -14 -18, 0 -22 Z"
          fill="url(#crystalShine)"
          stroke="url(#goldShine)"
          strokeWidth="1.2"
        />
        <path d="M 0 -16 C 6 -12, 6 8, 0 22" fill="none" stroke="url(#goldShine)" strokeWidth="1" opacity="0.7" />
      </g>
    </svg>
  );
}

// --- 7) Twilight Dome Studs ---
export function DomeStudArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          <ellipse cx="200" cy="200" rx="90" ry="110" fill="#2A1F15" />
          <ellipse cx="200" cy="200" rx="78" ry="98" fill="#3A2B1E" />
          <path d="M 120 150 Q 200 100 280 150 Q 285 220 265 260 L 250 220 Q 200 180 150 220 L 135 260 Q 115 220 120 150 Z" fill="#1A130C" />
        </>
      )}
      {/* Pair of dome studs — left/right */}
      {[130, 270].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 245)`}>
          {/* dome (half-sphere) */}
          <path
            d="M -22 0 A 22 22 0 0 1 22 0 Z"
            fill="url(#goldShine)"
          />
          {/* highlight */}
          <ellipse cx="-8" cy="-8" rx="7" ry="3" fill="#F2DCA0" opacity="0.6" transform="rotate(-30 -8 -8)" />
          {/* base rim */}
          <ellipse cx="0" cy="0" rx="22" ry="3" fill="url(#goldDeep)" />
          {/* post */}
          <rect x="-1.5" y="0" width="3" height="14" fill="url(#goldShine)" />
          <circle cx="0" cy="16" r="3" fill="url(#goldShine)" />
        </g>
      ))}
    </svg>
  );
}

// --- 8) Moonlight Huggies (pavé crescent) ---
export function MoonHuggieArt({ onModel = false }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill={onModel ? "url(#bgWarm)" : "url(#bgLight)"} />
      {onModel && (
        <>
          <ellipse cx="200" cy="200" rx="90" ry="110" fill="#2A1F15" />
          <ellipse cx="200" cy="200" rx="78" ry="98" fill="#3A2B1E" />
          <path d="M 120 150 Q 200 100 280 150 Q 285 220 265 260 L 250 220 Q 200 180 150 220 L 135 260 Q 115 220 120 150 Z" fill="#1A130C" />
        </>
      )}
      {[130, 270].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 245)`}>
          {/* crescent huggie — outer ring with pavé row */}
          <path
            d="M -30 0 A 30 30 0 0 1 30 0"
            fill="none"
            stroke="url(#goldShine)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* pavé stones along the top */}
          {Array.from({ length: 14 }).map((_, j) => {
            const a = Math.PI - (j / 13) * Math.PI;
            const r = 30;
            const x = Math.cos(a) * r;
            const y = -Math.sin(a) * r;
            return <circle key={j} cx={x} cy={y} r="2.4" fill="url(#crystalShine)" stroke="url(#goldShine)" strokeWidth="0.4" />;
          })}
          {/* hinge */}
          <circle cx="28" cy="2" r="2.5" fill="url(#goldShine)" />
          {/* subtle inner curve */}
          <path d="M -22 0 A 22 22 0 0 1 22 0" fill="none" stroke="url(#goldRim)" strokeWidth="0.8" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

// --- Category tile illustrations ---
export function CategoryEarringsArt() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill="url(#bgWarm)" />
      <ellipse cx="200" cy="260" rx="180" ry="220" fill="#2A1F15" opacity="0.6" />
      {/* Single statement earring on display */}
      <g transform="translate(200 230)">
        {/* ear hook */}
        <path d="M 0 -90 C 12 -90, 18 -75, 18 -60" fill="none" stroke="url(#goldShine)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="-50" r="6" fill="url(#goldShine)" />
        {/* large geometric drop */}
        <g transform="translate(0 30)">
          <path d="M 0 -50 C 35 -45, 50 0, 35 35 C 20 60, 0 70, 0 70 C 0 70, -20 60, -35 35 C -50 0, -35 -45, 0 -50 Z" fill="none" stroke="url(#goldShine)" strokeWidth="2.5" />
          <path d="M 0 -35 C 22 -30, 30 0, 20 25 C 10 45, 0 52, 0 52 C 0 52, -10 45, -20 25 C -30 0, -22 -30, 0 -35 Z" fill="none" stroke="url(#goldRim)" strokeWidth="1.2" />
          {/* center stone */}
          <ellipse cx="0" cy="-5" rx="14" ry="20" fill="url(#crystalShine)" />
          <ellipse cx="-4" cy="-12" rx="4" ry="6" fill="#FFFFFF" opacity="0.8" />
        </g>
      </g>
    </svg>
  );
}

export function CategoryNecklacesArt() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill="url(#bgWarm)" />
      <ellipse cx="200" cy="260" rx="180" ry="220" fill="#2A1F15" opacity="0.6" />
      {/* Necklace on display bust */}
      <g>
        <path d="M 70 130 Q 200 280 330 130" fill="none" stroke="url(#goldRim)" strokeWidth="1.4" />
        {Array.from({ length: 35 }).map((_, i) => {
          const t = i / 34;
          const x = 70 + 260 * t;
          const y = 130 + 150 * Math.sin(Math.PI * t);
          return <circle key={i} cx={x} cy={y} r="2" fill="url(#goldShine)" />;
        })}
        {/* Pendant — teardrop gem */}
        <g transform="translate(200 290)">
          <path d="M 0 -28 C 18 -22, 22 0, 14 22 C 8 36, 0 42, 0 42 C 0 42, -8 36, -14 22 C -22 0, -18 -22, 0 -28 Z" fill="url(#crystalShine)" stroke="url(#goldShine)" strokeWidth="1.5" />
          <ellipse cx="-3" cy="-10" rx="3" ry="6" fill="#FFFFFF" opacity="0.85" />
        </g>
      </g>
    </svg>
  );
}

export function CategoryHuggiesArt() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="400" height="500" fill="url(#bgWarm)" />
      <ellipse cx="200" cy="260" rx="180" ry="220" fill="#2A1F15" opacity="0.6" />
      {/* Three huggies stacked */}
      {[150, 250, 350].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 250)`}>
          <circle r={i === 1 ? 50 : 38} fill="none" stroke="url(#goldShine)" strokeWidth={i === 1 ? 16 : 12} />
          <circle r={i === 1 ? 38 : 28} fill="none" stroke="url(#goldRim)" strokeWidth="0.8" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

// --- Hero composition: model with jewelry (warm editorial) ---
export function HeroArt() {
  return (
    <svg viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <defs>
        <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A2E22" />
          <stop offset="50%" stopColor="#251C13" />
          <stop offset="100%" stopColor="#15100A" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="55%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8A6A35" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8A6A35" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#heroBg)" />
      <rect width="800" height="1000" fill="url(#heroGlow)" />
      {/* Stylized model silhouette — shoulders, neck, jawline, ear */}
      <g>
        {/* hair back */}
        <path d="M 240 200 Q 400 100 560 200 Q 600 350 580 500 Q 560 650 520 750 L 280 750 Q 240 650 220 500 Q 200 350 240 200 Z" fill="#1A130C" />
        {/* face/head */}
        <ellipse cx="400" cy="380" rx="130" ry="170" fill="#3A2B1E" />
        <ellipse cx="400" cy="380" rx="110" ry="150" fill="#4A3525" />
        {/* soft cheek light */}
        <ellipse cx="460" cy="420" rx="50" ry="80" fill="#6B4D35" opacity="0.4" />
        {/* hair front strand */}
        <path d="M 270 240 Q 400 200 530 240 Q 540 320 510 380 L 490 350 Q 400 320 310 350 L 290 380 Q 260 320 270 240 Z" fill="#0F0A06" />
        {/* neck */}
        <path d="M 330 540 Q 400 590 470 540 L 470 650 L 330 650 Z" fill="#2A1F15" />
        {/* shoulders / chest */}
        <path d="M 200 700 Q 400 800 600 700 L 700 1000 L 100 1000 Z" fill="#1A130C" />
        {/* collarbone hint */}
        <path d="M 280 720 Q 400 760 520 720" fill="none" stroke="#0A0805" strokeWidth="2" opacity="0.6" />
      </g>
      {/* earring on the visible side */}
      <g transform="translate(495 410)">
        <path d="M 0 -25 C 8 -25, 12 -18, 12 -10" fill="none" stroke="url(#goldShine)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="0" r="5" fill="url(#goldShine)" />
        <g transform="translate(0 22)">
          <circle r="14" fill="url(#crystalShine)" />
          <circle r="2" cx="-3" cy="-3" fill="#FFFFFF" opacity="0.9" />
        </g>
      </g>
      {/* necklace on neck */}
      <g>
        <path d="M 250 620 Q 400 760 550 620" fill="none" stroke="url(#goldRim)" strokeWidth="1.2" />
        {Array.from({ length: 26 }).map((_, i) => {
          const t = i / 25;
          const x = 250 + 300 * t;
          const y = 620 + 140 * Math.sin(Math.PI * t);
          return <circle key={i} cx={x} cy={y} r="1.8" fill="url(#goldShine)" />;
        })}
        {/* pendant */}
        <g transform="translate(400 740)">
          <path d="M 0 -16 C 12 -12, 16 0, 10 14 C 6 22, 0 26, 0 26 C 0 26, -6 22, -10 14 C -16 0, -12 -12, 0 -16 Z" fill="url(#crystalShine)" stroke="url(#goldShine)" strokeWidth="1" />
        </g>
      </g>
      {/* soft glow particles */}
      <g opacity="0.5">
        <circle cx="150" cy="200" r="1.5" fill="#F2DCA0" />
        <circle cx="650" cy="150" r="1.5" fill="#F2DCA0" />
        <circle cx="700" cy="400" r="1" fill="#F2DCA0" />
        <circle cx="100" cy="500" r="1" fill="#F2DCA0" />
        <circle cx="600" cy="850" r="1" fill="#F2DCA0" />
        <circle cx="180" cy="900" r="1.2" fill="#F2DCA0" />
      </g>
    </svg>
  );
}

// --- Editorial / brand story composition ---
export function StoryArt() {
  return (
    <svg viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <defs>
        <radialGradient id="storyBg" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#3A2E22" />
          <stop offset="100%" stopColor="#15100A" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#storyBg)" />
      {/* hand holding a piece of jewelry — simplified editorial silhouette */}
      <g transform="translate(300 400)">
        {/* palm */}
        <path d="M -100 50 Q -100 -50, -60 -80 Q 0 -100, 80 -80 Q 130 -50, 130 50 Q 130 100, 100 130 L -90 130 Q -120 100, -100 50 Z" fill="#3A2B1E" />
        <path d="M -100 50 Q -100 -50, -60 -80 Q 0 -100, 80 -80 Q 130 -50, 130 50 Q 130 100, 100 130 L -90 130 Q -120 100, -100 50 Z" fill="#4A3525" opacity="0.6" />
        {/* fingers */}
        <ellipse cx="-80" cy="-60" rx="22" ry="40" transform="rotate(-20 -80 -60)" fill="#3A2B1E" />
        <ellipse cx="-30" cy="-95" rx="20" ry="50" fill="#3A2B1E" />
        <ellipse cx="30" cy="-100" rx="20" ry="52" fill="#3A2B1E" />
        <ellipse cx="85" cy="-80" rx="20" ry="45" transform="rotate(20 85 -80)" fill="#3A2B1E" />
        {/* thumb */}
        <ellipse cx="-115" cy="20" rx="22" ry="42" transform="rotate(-50 -115 20)" fill="#3A2B1E" />
        {/* jewelry resting on palm — necklace draped */}
        <g>
          <path d="M -60 0 Q 0 80, 60 0" fill="none" stroke="url(#goldShine)" strokeWidth="2" />
          {Array.from({ length: 20 }).map((_, i) => {
            const t = i / 19;
            const x = -60 + 120 * t;
            const y = 0 + 80 * Math.sin(Math.PI * t);
            return <circle key={i} cx={x} cy={y} r="1.5" fill="url(#goldShine)" />;
          })}
          {/* pendant */}
          <g transform="translate(0 78)">
            <path d="M 0 -14 C 10 -10, 14 0, 8 12 C 4 20, 0 24, 0 24 C 0 24, -4 20, -8 12 C -14 0, -10 -10, 0 -14 Z" fill="url(#crystalShine)" stroke="url(#goldShine)" strokeWidth="1" />
          </g>
        </g>
      </g>
      {/* light wash */}
      <ellipse cx="300" cy="400" rx="240" ry="280" fill="#8A6A35" opacity="0.08" />
    </svg>
  );
}

// --- UGC vertical cards (9:16) ---
export function UgcCardArt({ variant = 0, caption = "" }) {
  const variants = [
    {
      bg: "url(#bgWarm)",
      decor: (
        <g>
          {/* woman silhouette with earring */}
          <ellipse cx="180" cy="280" rx="100" ry="130" fill="#2A1F15" />
          <ellipse cx="180" cy="280" rx="85" ry="115" fill="#3A2B1E" />
          <ellipse cx="180" cy="270" rx="65" ry="85" fill="#4A3525" />
          <path d="M 90 220 Q 180 150 270 220 Q 280 320 250 380 L 230 320 Q 180 280 130 320 L 110 380 Q 80 320 90 220 Z" fill="#1A130C" />
          <path d="M 130 400 Q 180 450 230 400 L 230 640 L 130 640 Z" fill="#1F1A14" />
          {/* ear + drop earring */}
          <g transform="translate(250 320)">
            <circle r="5" fill="url(#goldShine)" />
            <path d="M 0 5 Q 0 25, -8 35" fill="none" stroke="url(#goldShine)" strokeWidth="1.5" />
            <circle cx="-10" cy="42" r="8" fill="url(#crystalShine)" />
          </g>
        </g>
      ),
    },
    {
      bg: "url(#bgLight)",
      decor: (
        <g>
          <ellipse cx="180" cy="280" rx="100" ry="130" fill="#5C4836" />
          <ellipse cx="180" cy="280" rx="85" ry="115" fill="#7A5F47" />
          <ellipse cx="180" cy="270" rx="65" ry="85" fill="#9A7B5E" />
          <path d="M 90 220 Q 180 150 270 220 Q 280 320 250 380 L 230 320 Q 180 280 130 320 L 110 380 Q 80 320 90 220 Z" fill="#3A2A1D" />
          <path d="M 130 400 Q 180 450 230 400 L 230 640 L 130 640 Z" fill="#2A1F15" />
          {/* huggies */}
          <g transform="translate(120 340)">
            <circle r="14" fill="none" stroke="url(#goldShine)" strokeWidth="6" />
          </g>
          <g transform="translate(240 340)">
            <circle r="14" fill="none" stroke="url(#goldShine)" strokeWidth="6" />
          </g>
        </g>
      ),
    },
    {
      bg: "url(#bgWarm)",
      decor: (
        <g>
          <ellipse cx="180" cy="280" rx="100" ry="130" fill="#2A1F15" />
          <ellipse cx="180" cy="280" rx="85" ry="115" fill="#3A2B1E" />
          <ellipse cx="180" cy="270" rx="65" ry="85" fill="#4A3525" />
          <path d="M 90 220 Q 180 150 270 220 Q 280 320 250 380 L 230 320 Q 180 280 130 320 L 110 380 Q 80 320 90 220 Z" fill="#1A130C" />
          <path d="M 130 400 Q 180 450 230 400 L 230 640 L 130 640 Z" fill="#1F1A14" />
          {/* floral necklace */}
          <g>
            <path d="M 80 380 Q 180 480 280 380" fill="none" stroke="url(#goldRim)" strokeWidth="1" />
            {Array.from({ length: 18 }).map((_, i) => {
              const t = i / 17;
              const x = 80 + 200 * t;
              const y = 380 + 100 * Math.sin(Math.PI * t);
              return <circle key={i} cx={x} cy={y} r="1.4" fill="url(#goldShine)" />;
            })}
            <g transform="translate(180 470)">
              <circle r="10" fill="url(#crystalShine)" />
              {Array.from({ length: 6 }).map((_, i) => {
                const a = (i / 6) * Math.PI * 2;
                return <ellipse key={i} cx={Math.cos(a) * 12} cy={Math.sin(a) * 12} rx="4" ry="7" transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * 12} ${Math.sin(a) * 12})`} fill="url(#crystalShine)" />;
              })}
              <circle r="4" fill="url(#goldShine)" />
            </g>
          </g>
        </g>
      ),
    },
    {
      bg: "url(#bgLight)",
      decor: (
        <g>
          <ellipse cx="180" cy="280" rx="100" ry="130" fill="#4A3826" />
          <ellipse cx="180" cy="280" rx="85" ry="115" fill="#5C4730" />
          <ellipse cx="180" cy="270" rx="65" ry="85" fill="#735640" />
          <path d="M 90 220 Q 180 150 270 220 Q 280 320 250 380 L 230 320 Q 180 280 130 320 L 110 380 Q 80 320 90 220 Z" fill="#2A1F15" />
          <path d="M 130 400 Q 180 450 230 400 L 230 640 L 130 640 Z" fill="#1F1A14" />
          {/* ear cuff */}
          <g transform="translate(250 320)">
            <path d="M -25 -20 C -35 0, -35 30, -15 45" fill="none" stroke="url(#goldShine)" strokeWidth="3" />
            <circle r="4" fill="url(#crystalShine)" />
          </g>
        </g>
      ),
    },
    {
      bg: "url(#bgWarm)",
      decor: (
        <g>
          <ellipse cx="180" cy="280" rx="100" ry="130" fill="#2A1F15" />
          <ellipse cx="180" cy="280" rx="85" ry="115" fill="#3A2B1E" />
          <ellipse cx="180" cy="270" rx="65" ry="85" fill="#4A3525" />
          <path d="M 90 220 Q 180 150 270 220 Q 280 320 250 380 L 230 320 Q 180 280 130 320 L 110 380 Q 80 320 90 220 Z" fill="#1A130C" />
          <path d="M 130 400 Q 180 450 230 400 L 230 640 L 130 640 Z" fill="#1F1A14" />
          {/* drop earring pair */}
          <g transform="translate(120 340)">
            <path d="M 0 -20 C 5 -20, 7 -15, 7 -10" fill="none" stroke="url(#goldShine)" strokeWidth="1.5" />
            <path d="M 0 -8 C 12 -4, 16 10, 8 22 C 0 30, -8 22, -16 10 C -12 -4, 0 -8, 0 -8 Z" fill="none" stroke="url(#goldShine)" strokeWidth="1.2" />
            <circle r="3" fill="url(#crystalShine)" />
          </g>
          <g transform="translate(240 340)">
            <path d="M 0 -20 C 5 -20, 7 -15, 7 -10" fill="none" stroke="url(#goldShine)" strokeWidth="1.5" />
            <path d="M 0 -8 C 12 -4, 16 10, 8 22 C 0 30, -8 22, -16 10 C -12 -4, 0 -8, 0 -8 Z" fill="none" stroke="url(#goldShine)" strokeWidth="1.2" />
            <circle r="3" fill="url(#crystalShine)" />
          </g>
        </g>
      ),
    },
    {
      bg: "url(#bgLight)",
      decor: (
        <g>
          <ellipse cx="180" cy="280" rx="100" ry="130" fill="#5A4530" />
          <ellipse cx="180" cy="280" rx="85" ry="115" fill="#7A5F47" />
          <ellipse cx="180" cy="270" rx="65" ry="85" fill="#9A7B5E" />
          <path d="M 90 220 Q 180 150 270 220 Q 280 320 250 380 L 230 320 Q 180 280 130 320 L 110 380 Q 80 320 90 220 Z" fill="#3A2A1D" />
          <path d="M 130 400 Q 180 450 230 400 L 230 640 L 130 640 Z" fill="#2A1F15" />
          {/* dome studs */}
          <g transform="translate(120 330)">
            <ellipse rx="10" ry="4" fill="url(#goldDeep)" />
            <path d="M -10 0 A 10 10 0 0 1 10 0 Z" fill="url(#goldShine)" />
          </g>
          <g transform="translate(240 330)">
            <ellipse rx="10" ry="4" fill="url(#goldDeep)" />
            <path d="M -10 0 A 10 10 0 0 1 10 0 Z" fill="url(#goldShine)" />
          </g>
          {/* delicate necklace */}
          <path d="M 100 420 Q 180 480 260 420" fill="none" stroke="url(#goldRim)" strokeWidth="0.8" />
          <circle cx="180" cy="460" r="3" fill="url(#crystalShine)" />
        </g>
      ),
    },
  ];
  const v = variants[variant % variants.length];
  return (
    <svg viewBox="0 0 360 640" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {GOLD_GRADIENT}
      <rect width="360" height="640" fill={v.bg} />
      {v.decor}
    </svg>
  );
}

// --- Dispatcher for product imagery by key ---
export function ProductArt({ imageKey = "sphereHuggie", className = "" }) {
  const map = {
    earCuff: <EarCuffArt />,
    earCuffOn: <EarCuffArt onModel />,
    floralNecklace: <FloralNecklaceArt />,
    floralNecklaceOn: <FloralNecklaceArt onModel />,
    sphereHuggie: <SphereHuggieArt />,
    sphereHuggieOn: <SphereHuggieArt onModel />,
    laceDrop: <LaceDropArt />,
    laceDropOn: <LaceDropArt onModel />,
    heirloomSet: <HeirloomSetArt />,
    heirloomSetOn: <HeirloomSetArt onModel />,
    petalChain: <PetalChainArt />,
    petalChainOn: <PetalChainArt onModel />,
    domeStud: <DomeStudArt />,
    domeStudOn: <DomeStudArt onModel />,
    moonHuggie: <MoonHuggieArt />,
    moonHuggieOn: <MoonHuggieArt onModel />,
    catEarrings: <CategoryEarringsArt />,
    catNecklaces: <CategoryNecklacesArt />,
    catHuggies: <CategoryHuggiesArt />,
  };
  return <div className={`w-full h-full ${className}`}>{map[imageKey] || map.sphereHuggie}</div>;
}
