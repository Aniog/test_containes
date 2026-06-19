import React from "react";
import { cn } from "@/lib/utils";

// Decorative "editorial" jewelry imagery rendered as inline SVG.
// All pieces follow the warm gold + deep neutral/cream palette
// defined in design.md — never blue, never clinical white.

function VividAura({ className, variant = 0 }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`va-bg-${variant}`} cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#3A2C1F" />
          <stop offset="60%" stopColor="#221A12" />
          <stop offset="100%" stopColor="#0E0A07" />
        </radialGradient>
        <linearGradient id={`va-gold-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8CC83" />
          <stop offset="50%" stopColor="#B8965A" />
          <stop offset="100%" stopColor="#7A5A2A" />
        </linearGradient>
        <linearGradient id={`va-gold-shine-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBE6B0" />
          <stop offset="50%" stopColor="#D9B770" />
          <stop offset="100%" stopColor="#8C6F3F" />
        </linearGradient>
        <radialGradient id={`va-crystal-${variant}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF5D6" />
          <stop offset="40%" stopColor="#F0D58F" />
          <stop offset="100%" stopColor="#7A5A2A" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#va-bg-${variant})`} />
      {/* soft warm glow */}
      <ellipse cx="200" cy="240" rx="180" ry="120" fill="#B8965A" opacity="0.08" />
      {/* ear cuff arc — wraps around */}
      <path
        d="M 120 130 Q 200 70 290 140 Q 300 200 270 250 Q 220 290 200 280 Q 180 270 175 240"
        stroke={`url(#va-gold-${variant})`}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 120 130 Q 200 70 290 140 Q 300 200 270 250 Q 220 290 200 280 Q 180 270 175 240"
        stroke={`url(#va-gold-shine-${variant})`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* crystal accent */}
      <ellipse cx="262" cy="178" rx="14" ry="11" fill={`url(#va-crystal-${variant})`} />
      <ellipse cx="258" cy="174" rx="4" ry="3" fill="#FFFBE8" opacity="0.9" />
      {/* tiny gold beads along cuff */}
      {[140, 165, 195, 225, 250].map((x, i) => (
        <circle key={i} cx={x} cy={x < 200 ? 200 - (x - 120) * 0.7 : 130 + (x - 200) * 0.7} r="3" fill={`url(#va-gold-${variant})`} />
      ))}
      {/* warm light vignette */}
      <ellipse cx="200" cy="480" rx="200" ry="60" fill="#000" opacity="0.5" />
    </svg>
  );
}

function MajesticFlora({ className, variant = 0 }) {
  const petals = [
    { x: 200, y: 220, r: 28, fill: "#E8C66B" },
    { x: 170, y: 200, r: 18, fill: "#D9A8E8" },
    { x: 230, y: 200, r: 18, fill: "#A8C9E8" },
    { x: 170, y: 240, r: 18, fill: "#E8B0A8" },
    { x: 230, y: 240, r: 18, fill: "#A8E8C0" },
    { x: 200, y: 180, r: 14, fill: "#E8D88F" },
  ];
  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`mf-bg-${variant}`} cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#3A2C1F" />
          <stop offset="60%" stopColor="#1F1810" />
          <stop offset="100%" stopColor="#0E0A07" />
        </radialGradient>
        <linearGradient id={`mf-chain-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A5A2A" />
          <stop offset="50%" stopColor="#E8CC83" />
          <stop offset="100%" stopColor="#7A5A2A" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#mf-bg-${variant})`} />
      <ellipse cx="200" cy="240" rx="180" ry="120" fill="#B8965A" opacity="0.06" />
      {/* chain */}
      <path
        d="M 60 100 Q 200 60 340 100 Q 350 200 200 280 Q 50 200 60 100"
        stroke={`url(#mf-chain-${variant})`}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 60 100 Q 200 60 340 100"
        stroke="#E8CC83"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* floral cluster */}
      {petals.map((p, i) => (
        <g key={i}>
          <ellipse cx={p.x} cy={p.y} rx={p.r} ry={p.r * 1.2} fill={p.fill} opacity="0.95" />
          <ellipse cx={p.x - p.r * 0.3} cy={p.y - p.r * 0.3} rx={p.r * 0.3} ry={p.r * 0.4} fill="#FFF" opacity="0.4" />
        </g>
      ))}
      <circle cx="200" cy="220" r="8" fill="#B8965A" />
      <circle cx="200" cy="220" r="3" fill="#FBE6B0" />
      {/* chain shadow */}
      <path
        d="M 60 100 Q 200 60 340 100 Q 350 200 200 280 Q 50 200 60 100"
        stroke="#000"
        strokeWidth="4"
        fill="none"
        opacity="0.3"
        transform="translate(2 4)"
      />
      <ellipse cx="200" cy="480" rx="200" ry="60" fill="#000" opacity="0.5" />
    </svg>
  );
}

function GoldenSphere({ className, variant = 0 }) {
  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`gs-bg-${variant}`} cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#3A2C1F" />
          <stop offset="60%" stopColor="#221A12" />
          <stop offset="100%" stopColor="#0E0A07" />
        </radialGradient>
        <radialGradient id={`gs-dome-${variant}`} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FBE6B0" />
          <stop offset="35%" stopColor="#E8CC83" />
          <stop offset="75%" stopColor="#B8965A" />
          <stop offset="100%" stopColor="#5A4220" />
        </radialGradient>
        <radialGradient id={`gs-dome-r-${variant}`} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FBE6B0" />
          <stop offset="35%" stopColor="#E8CC83" />
          <stop offset="75%" stopColor="#B8965A" />
          <stop offset="100%" stopColor="#5A4220" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#gs-bg-${variant})`} />
      <ellipse cx="200" cy="240" rx="180" ry="120" fill="#B8965A" opacity="0.08" />
      {/* left earring */}
      <g>
        <circle cx="140" cy="220" r="60" fill={`url(#gs-dome-${variant})`} />
        <circle cx="140" cy="220" r="60" fill="none" stroke="#5A4220" strokeWidth="0.5" />
        <ellipse cx="120" cy="200" rx="22" ry="14" fill="#FFF8DC" opacity="0.5" />
        <ellipse cx="120" cy="200" rx="10" ry="6" fill="#FFF" opacity="0.4" />
        {/* hinge */}
        <rect x="196" y="218" width="8" height="6" fill="#8C6F3F" />
        <circle cx="202" cy="221" r="3" fill="#D9B770" />
      </g>
      {/* right earring */}
      <g>
        <circle cx="270" cy="220" r="60" fill={`url(#gs-dome-r-${variant})`} />
        <circle cx="270" cy="220" r="60" fill="none" stroke="#5A4220" strokeWidth="0.5" />
        <ellipse cx="250" cy="200" rx="22" ry="14" fill="#FFF8DC" opacity="0.5" />
        <ellipse cx="250" cy="200" rx="10" ry="6" fill="#FFF" opacity="0.4" />
        <rect x="196" y="218" width="8" height="6" fill="#8C6F3F" />
        <circle cx="198" cy="221" r="3" fill="#D9B770" />
      </g>
      <ellipse cx="200" cy="480" rx="200" ry="60" fill="#000" opacity="0.5" />
    </svg>
  );
}

function AmberLace({ className, variant = 0 }) {
  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`al-bg-${variant}`} cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#3A2C1F" />
          <stop offset="60%" stopColor="#221A12" />
          <stop offset="100%" stopColor="#0E0A07" />
        </radialGradient>
        <linearGradient id={`al-gold-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBE6B0" />
          <stop offset="50%" stopColor="#D9B770" />
          <stop offset="100%" stopColor="#8C6F3F" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#al-bg-${variant})`} />
      <ellipse cx="200" cy="240" rx="180" ry="120" fill="#B8965A" opacity="0.08" />

      {/* left earring */}
      <g transform="translate(0 0)">
        {/* hook */}
        <path
          d="M 145 100 Q 140 90 130 95 Q 122 100 124 110"
          stroke={`url(#al-gold-${variant})`}
          strokeWidth="2"
          fill="none"
        />
        {/* lace body */}
        <path
          d="M 130 110 L 110 200 L 100 240 L 105 280 L 95 320 L 100 360 L 110 380 L 130 380 L 150 380 L 160 360 L 165 320 L 160 280 L 165 240 L 155 200 L 150 130 Z"
          fill="none"
          stroke={`url(#al-gold-${variant})`}
          strokeWidth="2.5"
        />
        {/* filigree — vertical lines */}
        {[120, 140, 160].map((x, i) => (
          <line key={`l1-${i}`} x1={x} y1="180" x2={x} y2="370" stroke={`url(#al-gold-${variant})`} strokeWidth="1" opacity="0.85" />
        ))}
        {/* filigree — horizontal arcs */}
        {[200, 240, 280, 320, 360].map((y, i) => (
          <path
            key={`l2-${i}`}
            d={`M 100 ${y} Q 130 ${y - 12} 160 ${y}`}
            stroke={`url(#al-gold-${variant})`}
            strokeWidth="1"
            fill="none"
            opacity="0.85"
          />
        ))}
        {/* central rosette */}
        <circle cx="130" cy="290" r="14" fill="none" stroke={`url(#al-gold-${variant})`} strokeWidth="1.5" />
        <circle cx="130" cy="290" r="6" fill={`url(#al-gold-${variant})`} />
        {/* post */}
        <line x1="145" y1="100" x2="145" y2="120" stroke={`url(#al-gold-${variant})`} strokeWidth="1.5" />
      </g>

      {/* right earring */}
      <g transform="translate(140 0)">
        <path
          d="M 145 100 Q 140 90 130 95 Q 122 100 124 110"
          stroke={`url(#al-gold-${variant})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 130 110 L 110 200 L 100 240 L 105 280 L 95 320 L 100 360 L 110 380 L 130 380 L 150 380 L 160 360 L 165 320 L 160 280 L 165 240 L 155 200 L 150 130 Z"
          fill="none"
          stroke={`url(#al-gold-${variant})`}
          strokeWidth="2.5"
        />
        {[120, 140, 160].map((x, i) => (
          <line key={`r1-${i}`} x1={x} y1="180" x2={x} y2="370" stroke={`url(#al-gold-${variant})`} strokeWidth="1" opacity="0.85" />
        ))}
        {[200, 240, 280, 320, 360].map((y, i) => (
          <path
            key={`r2-${i}`}
            d={`M 100 ${y} Q 130 ${y - 12} 160 ${y}`}
            stroke={`url(#al-gold-${variant})`}
            strokeWidth="1"
            fill="none"
            opacity="0.85"
          />
        ))}
        <circle cx="130" cy="290" r="14" fill="none" stroke={`url(#al-gold-${variant})`} strokeWidth="1.5" />
        <circle cx="130" cy="290" r="6" fill={`url(#al-gold-${variant})`} />
        <line x1="145" y1="100" x2="145" y2="120" stroke={`url(#al-gold-${variant})`} strokeWidth="1.5" />
      </g>

      <ellipse cx="200" cy="480" rx="200" ry="60" fill="#000" opacity="0.5" />
    </svg>
  );
}

function RoyalHeirloom({ className, variant = 0 }) {
  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`rh-bg-${variant}`} cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#3A2C1F" />
          <stop offset="60%" stopColor="#1F1810" />
          <stop offset="100%" stopColor="#0E0A07" />
        </radialGradient>
        <linearGradient id={`rh-gold-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBE6B0" />
          <stop offset="50%" stopColor="#D9B770" />
          <stop offset="100%" stopColor="#8C6F3F" />
        </linearGradient>
        <linearGradient id={`rh-box-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A241D" />
          <stop offset="100%" stopColor="#15110C" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#rh-bg-${variant})`} />
      <ellipse cx="200" cy="280" rx="180" ry="140" fill="#B8965A" opacity="0.1" />
      {/* open box */}
      <rect x="80" y="280" width="240" height="130" fill={`url(#rh-box-${variant})`} stroke="#3A3128" />
      <rect x="80" y="280" width="240" height="6" fill="#3A3128" />
      <rect x="80" y="280" width="240" height="40" fill="#1F1810" />
      <rect x="195" y="285" width="10" height="6" fill="#B8965A" />
      {/* earring dome on cushion */}
      <circle cx="135" cy="320" r="32" fill={`url(#rh-gold-${variant})`} />
      <ellipse cx="125" cy="310" rx="10" ry="6" fill="#FFF" opacity="0.5" />
      {/* necklace drape */}
      <path
        d="M 170 360 Q 200 330 230 360 Q 260 380 280 370"
        stroke={`url(#rh-gold-${variant})`}
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M 170 360 Q 200 330 230 360 Q 260 380 280 370"
        stroke="#FBE6B0"
        strokeWidth="0.5"
        fill="none"
        opacity="0.7"
      />
      {/* small pendant */}
      <circle cx="225" cy="350" r="10" fill={`url(#rh-gold-${variant})`} />
      <ellipse cx="221" cy="346" rx="3" ry="2" fill="#FFF" opacity="0.6" />
      {/* gold ribbon */}
      <path
        d="M 110 405 Q 200 420 290 405"
        stroke={`url(#rh-gold-${variant})`}
        strokeWidth="3"
        fill="none"
      />
      <ellipse cx="200" cy="480" rx="200" ry="60" fill="#000" opacity="0.5" />
    </svg>
  );
}

// Lifestyle / on-model variant — same gold piece on a warm cream background
function LifestyleWrap({ children, className }) {
  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{
        background:
          "radial-gradient(ellipse at 30% 30%, #F0E6D0 0%, #E4D7B8 60%, #C9B58A 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(184,150,90,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(140,111,63,0.18) 0%, transparent 50%)",
        }}
      />
      {children}
    </div>
  );
}

// Cream alt — used as hover / alt image
function CreamVariant({ children, className }) {
  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(135deg, #F5F0E6 0%, #EFE7D6 50%, #E4D7B8 100%)",
      }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}

// On-model style illustration: a soft warm silhouette wearing the piece
function ModelSilhouette({ accent, className }) {
  return (
    <svg viewBox="0 0 400 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C9A6" />
          <stop offset="100%" stopColor="#B89270" />
        </linearGradient>
        <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A2818" />
          <stop offset="100%" stopColor="#1A100A" />
        </linearGradient>
        <linearGradient id="dress" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A5A2A" />
          <stop offset="100%" stopColor="#3A2C1F" />
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBE6B0" />
          <stop offset="50%" stopColor="#D9B770" />
          <stop offset="100%" stopColor="#8C6F3F" />
        </linearGradient>
      </defs>
      {/* hair behind */}
      <path
        d="M 100 200 Q 100 80 200 80 Q 300 80 300 200 L 300 360 Q 250 380 200 380 Q 150 380 100 360 Z"
        fill="url(#hair)"
      />
      {/* face/neck oval */}
      <ellipse cx="200" cy="220" rx="70" ry="90" fill="url(#skin)" />
      {/* shoulders / dress */}
      <path
        d="M 80 380 Q 80 320 200 320 Q 320 320 320 380 L 320 500 L 80 500 Z"
        fill="url(#dress)"
      />
      {/* neck */}
      <path d="M 175 290 L 225 290 L 230 320 L 170 320 Z" fill="url(#skin)" />
      {/* hair front sweep */}
      <path
        d="M 130 200 Q 130 110 200 110 Q 270 110 270 200 Q 270 240 200 240 Q 130 240 130 200"
        fill="url(#hair)"
        opacity="0.95"
      />
      {/* earring on visible ear */}
      {accent === "earring" && (
        <g>
          <ellipse cx="262" cy="225" rx="6" ry="14" fill="url(#skin)" opacity="0.8" />
          <circle cx="262" cy="245" r="6" fill="url(#gold)" />
        </g>
      )}
      {accent === "ear-cuff" && (
        <path
          d="M 255 200 Q 275 210 275 235 Q 270 255 255 250"
          stroke="url(#gold)"
          strokeWidth="3"
          fill="none"
        />
      )}
      {accent === "necklace" && (
        <g>
          <path
            d="M 165 305 Q 200 350 235 305"
            stroke="url(#gold)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="200" cy="345" r="6" fill="url(#gold)" />
        </g>
      )}
      {accent === "huggie" && (
        <g>
          <ellipse cx="262" cy="225" rx="6" ry="14" fill="url(#skin)" opacity="0.8" />
          <circle cx="262" cy="240" r="14" fill="url(#gold)" />
          <circle cx="262" cy="240" r="14" fill="none" stroke="#5A4220" strokeWidth="0.5" />
        </g>
      )}
      {accent === "set" && (
        <g>
          <ellipse cx="262" cy="225" rx="6" ry="14" fill="url(#skin)" opacity="0.8" />
          <circle cx="262" cy="240" r="11" fill="url(#gold)" />
          <path
            d="M 175 305 Q 200 345 225 305"
            stroke="url(#gold)"
            strokeWidth="2"
            fill="none"
          />
        </g>
      )}
      {/* soft warm overlay */}
      <rect width="400" height="500" fill="url(#skin)" opacity="0.0" />
    </svg>
  );
}

// Category tile imagery
function CategoryTile({ slug, className }) {
  const accentMap = {
    earrings: "earring",
    necklaces: "necklace",
    huggies: "huggie",
    sets: "set",
  };
  const accent = accentMap[slug] || "earring";
  return (
    <div className={cn("relative w-full h-full", className)}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2A241D 0%, #1A1612 50%, #0E0A07 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <ModelSilhouette accent={accent} className="w-full h-full" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}

// UGC reel card imagery (vertical 9:16) — on-model moody shots
function UGCImage({ id, className }) {
  const variants = {
    "ugc-ear": { accent: "huggie", bg: "linear-gradient(180deg, #2A1A0F 0%, #0E0805 100%)" },
    "ugc-set": { accent: "set", bg: "linear-gradient(180deg, #1F1810 0%, #0A0805 100%)" },
    "ugc-necklace": { accent: "necklace", bg: "linear-gradient(180deg, #2A1F15 0%, #100A05 100%)" },
    "ugc-drop": { accent: "earring", bg: "linear-gradient(180deg, #1A140A 0%, #0A0805 100%)" },
    "ugc-cuff": { accent: "ear-cuff", bg: "linear-gradient(180deg, #251A0F 0%, #0A0805 100%)" },
    "ugc-floral": { accent: "necklace", bg: "linear-gradient(180deg, #2A1815 0%, #0A0805 100%)" },
  };
  const v = variants[id] || variants["ugc-ear"];
  return (
    <div className={cn("relative w-full h-full", className)} style={{ background: v.bg }}>
      <ModelSilhouette accent={v.accent} className="w-full h-full" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.65) 100%)" }} />
    </div>
  );
}

// Story split image — on-model lifestyle on a warm cream background
function StoryImage({ className }) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #F0E6D0 0%, #E4D7B8 50%, #C9B58A 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <ModelSilhouette accent="set" className="w-full h-full" />
      </div>
    </div>
  );
}

// Hero image — large editorial close-up of a model wearing gold jewelry
function HeroImage({ className }) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #3A2C1F 0%, #1A1208 60%, #050302 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(184,150,90,0.25) 0%, transparent 60%)",
        }}
      />
      <ModelSilhouette accent="necklace" className="w-full h-full" />
      {/* film grain / warm bloom */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}

// Main resolver component
export default function JewelryImage({ id, alt = "", className, mode = "default" }) {
  if (!id) return null;
  const variant = id.length % 3;

  if (id === "hero") return <HeroImage className={className} />;
  if (id === "story") return <StoryImage className={className} />;
  if (id === "category-earrings" || id === "category-necklaces" || id === "category-huggies" || id === "category-sets") {
    return <CategoryTile slug={id.replace("category-", "")} className={className} />;
  }
  if (id?.startsWith("ugc-")) return <UGCImage id={id} className={className} />;

  // map product images to their product
  const productMap = {
    "vivid-aura-1": <VividAura className={className} variant={0} />,
    "vivid-aura-2": <LifestyleWrap className={className}><ModelSilhouette accent="ear-cuff" className="w-full h-full" /></LifestyleWrap>,
    "vivid-aura-3": <CreamVariant className={className}><VividAura className="w-full h-full" variant={1} /></CreamVariant>,

    "majestic-flora-1": <MajesticFlora className={className} variant={0} />,
    "majestic-flora-2": <LifestyleWrap className={className}><ModelSilhouette accent="necklace" className="w-full h-full" /></LifestyleWrap>,
    "majestic-flora-3": <CreamVariant className={className}><MajesticFlora className="w-full h-full" variant={1} /></CreamVariant>,

    "golden-sphere-1": <GoldenSphere className={className} variant={0} />,
    "golden-sphere-2": <LifestyleWrap className={className}><ModelSilhouette accent="huggie" className="w-full h-full" /></LifestyleWrap>,
    "golden-sphere-3": <CreamVariant className={className}><GoldenSphere className="w-full h-full" variant={1} /></CreamVariant>,

    "amber-lace-1": <AmberLace className={className} variant={0} />,
    "amber-lace-2": <LifestyleWrap className={className}><ModelSilhouette accent="earring" className="w-full h-full" /></LifestyleWrap>,
    "amber-lace-3": <CreamVariant className={className}><AmberLace className="w-full h-full" variant={1} /></CreamVariant>,

    "royal-heirloom-1": <RoyalHeirloom className={className} variant={0} />,
    "royal-heirloom-2": <LifestyleWrap className={className}><ModelSilhouette accent="set" className="w-full h-full" /></LifestyleWrap>,
    "royal-heirloom-3": <CreamVariant className={className}><RoyalHeirloom className="w-full h-full" variant={1} /></CreamVariant>,
  };

  if (productMap[id]) return productMap[id];

  // fallback gradient
  return (
    <div
      className={cn("w-full h-full", className)}
      style={{
        background: "linear-gradient(135deg, #2A241D 0%, #1A1612 100%)",
      }}
    />
  );
}
