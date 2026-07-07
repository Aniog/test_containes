import React from "react"

// Palette sets — each is a warm, editorial gradient pair designed to flatter
// gold jewelry. The "accent" color is used for the jewelry element itself.
const PALETTES = {
  aubergine: { bg: "#1f1410", mid: "#3a1f1a", accent: "#e7c98a", warm: "#b08856" },
  midnight: { bg: "#0e1118", mid: "#1c2230", accent: "#f0d399", warm: "#c9a474" },
  sand: { bg: "#2a221a", mid: "#473a2c", accent: "#f3d9a6", warm: "#b08856" },
  rosewood: { bg: "#2a1714", mid: "#4a261f", accent: "#f1d6a4", warm: "#c8a48a" },
  oxblood: { bg: "#1c0d0d", mid: "#3d161a", accent: "#efd196", warm: "#b08856" },
  cream: { bg: "#efe5d2", mid: "#e1d3b8", accent: "#9a7438", warm: "#8a6a3f" },
  model: { bg: "#3a261c", mid: "#5a3a2a", accent: "#f0d8a4", warm: "#c9a474" },
}

// Shared gradients, defined once per render to keep DOM small
const Gradients = ({ id, palette }) => (
  <defs>
    <radialGradient id={`${id}-bg`} cx="50%" cy="40%" r="80%">
      <stop offset="0%" stopColor={palette.mid} />
      <stop offset="100%" stopColor={palette.bg} />
    </radialGradient>
    <linearGradient id={`${id}-metal`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f7e3b0" />
      <stop offset="40%" stopColor={palette.accent} />
      <stop offset="100%" stopColor={palette.warm} />
    </linearGradient>
    <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
    </linearGradient>
    <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" />
    </filter>
  </defs>
)

const Frame = ({ id, palette, viewBox = "0 0 600 600", children, className = "" }) => (
  <svg
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <Gradients id={id} palette={palette} />
    <rect width="100%" height="100%" fill={`url(#${id}-bg)`} />
    {children}
  </svg>
)

// Individual abstract jewelry illustrations. These are intentionally
// stylized — minimal linework that reads as "gold jewelry on warm tone"
// at any size. They are placeholders meant to be replaced with
// real product photography.

const EarCuff = ({ id, palette }) => (
  <g>
    {/* soft halo */}
    <circle cx="300" cy="300" r="200" fill={palette.mid} opacity="0.5" filter={`url(#${id}-soft)`} />
    {/* ear silhouette suggestion */}
    <path
      d="M180 200 Q160 300 200 400 Q230 460 280 470"
      stroke="none"
      fill={palette.mid}
      opacity="0.6"
    />
    {/* cuff arc */}
    <path
      d="M210 250 Q150 320 220 420"
      stroke={`url(#${id}-metal)`}
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
    />
    {/* cuff inner shine */}
    <path
      d="M212 252 Q158 318 218 410"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />
    {/* crystal */}
    <circle cx="240" cy="280" r="14" fill={palette.accent} />
    <circle cx="236" cy="276" r="4" fill="#fff" opacity="0.8" />
    {/* chain dangle */}
    <path
      d="M225 400 Q260 430 290 440"
      stroke={`url(#${id}-metal)`}
      strokeWidth="3"
      fill="none"
    />
    <circle cx="290" cy="440" r="6" fill={palette.accent} />
  </g>
)

const FloralNecklace = ({ id, palette }) => (
  <g>
    <circle cx="300" cy="300" r="220" fill={palette.mid} opacity="0.4" filter={`url(#${id}-soft)`} />
    {/* chain */}
    <path
      d="M120 140 Q300 380 480 140"
      stroke={`url(#${id}-metal)`}
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M120 140 Q300 380 480 140"
      stroke="#fff"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    {/* pendant flowers */}
    {[
      { x: 260, y: 320, c: palette.accent },
      { x: 300, y: 360, c: "#e0a48a" },
      { x: 340, y: 320, c: "#a8b88c" },
      { x: 240, y: 280, c: "#caa089" },
      { x: 360, y: 280, c: "#e7c98a" },
    ].map((f, i) => (
      <g key={i}>
        <circle cx={f.x} cy={f.y} r="18" fill={f.c} opacity="0.95" />
        <circle cx={f.x} cy={f.y} r="18" fill="none" stroke={palette.warm} strokeWidth="1.5" />
        {Array.from({ length: 6 }).map((_, j) => {
          const a = (j / 6) * Math.PI * 2
          return (
            <circle
              key={j}
              cx={f.x + Math.cos(a) * 8}
              cy={f.y + Math.sin(a) * 8}
              r="4"
              fill={f.c}
              opacity="0.8"
            />
          )
        })}
        <circle cx={f.x - 4} cy={f.y - 4} r="3" fill="#fff" opacity="0.7" />
      </g>
    ))}
  </g>
)

const SphereHuggie = ({ id, palette }) => (
  <g>
    <circle cx="300" cy="300" r="220" fill={palette.mid} opacity="0.4" filter={`url(#${id}-soft)`} />
    {/* two dome huggies */}
    {[220, 380].map((cx, i) => (
      <g key={i}>
        <ellipse cx={cx} cy="300" rx="60" ry="70" fill={`url(#${id}-metal)`} />
        <ellipse cx={cx - 12} cy="280" rx="20" ry="32" fill="#fff" opacity="0.5" />
        <ellipse
          cx={cx}
          cy="300"
          rx="60"
          ry="70"
          fill="none"
          stroke={palette.warm}
          strokeWidth="1.5"
        />
        {/* hinge detail */}
        <line
          x1={cx}
          y1="230"
          x2={cx}
          y2="235"
          stroke={palette.warm}
          strokeWidth="3"
        />
      </g>
    ))}
  </g>
)

const LaceDrop = ({ id, palette }) => (
  <g>
    <circle cx="300" cy="300" r="220" fill={palette.mid} opacity="0.4" filter={`url(#${id}-soft)`} />
    {[220, 380].map((cx, i) => (
      <g key={i}>
        {/* hook */}
        <path
          d={`M${cx} 130 Q${cx} 100 ${cx} 90`}
          stroke={`url(#${id}-metal)`}
          strokeWidth="2.5"
          fill="none"
        />
        {/* drop body */}
        <ellipse
          cx={cx}
          cy="320"
          rx="55"
          ry="90"
          fill="none"
          stroke={`url(#${id}-metal)`}
          strokeWidth="3"
        />
        {/* filigree cross-hatch */}
        {Array.from({ length: 6 }).map((_, r) => (
          <path
            key={r}
            d={`M${cx - 50 + r * 4} ${250 + r * 14} Q${cx} ${240 + r * 14} ${cx + 50 - r * 4} ${250 + r * 14}`}
            stroke={`url(#${id}-metal)`}
            strokeWidth="1"
            fill="none"
            opacity={0.6 + r * 0.05}
          />
        ))}
        {Array.from({ length: 5 }).map((_, c) => (
          <line
            key={c}
            x1={cx - 40 + c * 20}
            y1="260"
            x2={cx - 40 + c * 20}
            y2="380"
            stroke={`url(#${id}-metal)`}
            strokeWidth="0.7"
            opacity="0.5"
          />
        ))}
        {/* tiny gem drop */}
        <circle cx={cx} cy="420" r="8" fill={palette.accent} />
      </g>
    ))}
  </g>
)

const GiftSet = ({ id, palette }) => (
  <g>
    <circle cx="300" cy="300" r="240" fill={palette.mid} opacity="0.4" filter={`url(#${id}-soft)`} />
    {/* necklace arc */}
    <path
      d="M150 200 Q300 360 450 200"
      stroke={`url(#${id}-metal)`}
      strokeWidth="3"
      fill="none"
    />
    <circle cx="300" cy="350" r="18" fill={palette.accent} />
    <circle cx="300" cy="350" r="18" fill="none" stroke={palette.warm} strokeWidth="1.5" />
    {/* earrings */}
    <g>
      <ellipse cx="200" cy="430" rx="22" ry="28" fill={`url(#${id}-metal)`} />
      <ellipse cx="200" cy="425" rx="6" ry="10" fill="#fff" opacity="0.5" />
    </g>
    <g>
      <ellipse cx="400" cy="430" rx="22" ry="28" fill={`url(#${id}-metal)`} />
      <ellipse cx="400" cy="425" rx="6" ry="10" fill="#fff" opacity="0.5" />
    </g>
    {/* box ribbon */}
    <rect x="240" y="80" width="120" height="80" fill={palette.warm} opacity="0.3" rx="3" />
    <line x1="300" y1="80" x2="300" y2="160" stroke={palette.accent} strokeWidth="3" />
    <line x1="240" y1="120" x2="360" y2="120" stroke={palette.accent} strokeWidth="3" />
    <path
      d="M280 80 Q300 50 320 80"
      stroke={palette.accent}
      strokeWidth="3"
      fill="none"
    />
  </g>
)

// Category tile art (lifestyle, not single product)
const EarringsTile = ({ id, palette }) => (
  <g>
    <ellipse cx="300" cy="500" rx="280" ry="180" fill={palette.mid} opacity="0.5" filter={`url(#${id}-soft)`} />
    {/* abstract ear + drop earring */}
    <path
      d="M180 250 Q140 360 220 470"
      fill="none"
      stroke={`url(#${id}-metal)`}
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="220" cy="470" r="14" fill={palette.accent} />
    <path
      d="M340 240 Q310 200 270 220"
      fill="none"
      stroke={`url(#${id}-metal)`}
      strokeWidth="3"
    />
    <ellipse cx="260" cy="240" rx="22" ry="30" fill={`url(#${id}-metal)`} />
  </g>
)

const NecklacesTile = ({ id, palette }) => (
  <g>
    <ellipse cx="300" cy="280" rx="240" ry="160" fill={palette.mid} opacity="0.5" filter={`url(#${id}-soft)`} />
    {/* model neck suggestion */}
    <path
      d="M150 480 Q300 200 450 480"
      fill="none"
      stroke={palette.mid}
      strokeWidth="2"
      opacity="0.5"
    />
    <path
      d="M170 460 Q300 320 430 460"
      stroke={`url(#${id}-metal)`}
      strokeWidth="3"
      fill="none"
    />
    <circle cx="300" cy="430" r="20" fill={palette.accent} />
    <circle cx="300" cy="430" r="20" fill="none" stroke={palette.warm} strokeWidth="1.5" />
  </g>
)

const HuggiesTile = ({ id, palette }) => (
  <g>
    <ellipse cx="300" cy="300" rx="240" ry="200" fill={palette.mid} opacity="0.5" filter={`url(#${id}-soft)`} />
    <ellipse cx="220" cy="300" rx="70" ry="80" fill={`url(#${id}-metal)`} />
    <ellipse cx="220" cy="280" rx="22" ry="36" fill="#fff" opacity="0.4" />
    <ellipse cx="380" cy="300" rx="70" ry="80" fill={`url(#${id}-metal)`} />
    <ellipse cx="380" cy="280" rx="22" ry="36" fill="#fff" opacity="0.4" />
  </g>
)

// Hero model art — warm-lit face silhouette with jewelry
const HeroModel = ({ id, palette }) => (
  <g>
    <ellipse cx="300" cy="300" rx="320" ry="380" fill={palette.mid} opacity="0.6" filter={`url(#${id}-soft)`} />
    {/* face oval */}
    <ellipse cx="300" cy="280" rx="140" ry="190" fill={palette.mid} />
    {/* hair sweep */}
    <path
      d="M150 250 Q120 100 300 90 Q480 100 450 250 Q450 180 300 170 Q150 180 150 250"
      fill={palette.bg}
    />
    {/* soft cheek glow */}
    <ellipse cx="230" cy="320" rx="30" ry="20" fill={palette.warm} opacity="0.2" />
    <ellipse cx="370" cy="320" rx="30" ry="20" fill={palette.warm} opacity="0.2" />
    {/* lips */}
    <ellipse cx="300" cy="380" rx="22" ry="8" fill={palette.deep} opacity="0.7" />
    {/* eye lashes hint */}
    <path d="M240 270 Q260 265 280 270" stroke={palette.bg} strokeWidth="2" fill="none" />
    <path d="M320 270 Q340 265 360 270" stroke={palette.bg} strokeWidth="2" fill="none" />
    {/* earring on visible ear */}
    <circle cx="160" cy="350" r="6" fill={palette.accent} />
    <line x1="160" y1="350" x2="160" y2="370" stroke={palette.accent} strokeWidth="1.5" />
    <ellipse cx="160" cy="385" rx="6" ry="10" fill={palette.accent} />
    {/* neck and shoulders */}
    <path
      d="M220 460 Q300 500 380 460 L420 600 L180 600 Z"
      fill={palette.bg}
    />
    {/* necklace */}
    <path
      d="M200 470 Q300 540 400 470"
      stroke={`url(#${id}-metal)`}
      strokeWidth="3"
      fill="none"
    />
    <circle cx="300" cy="528" r="10" fill={palette.accent} />
  </g>
)

// Story image
const StoryArt = ({ id, palette }) => (
  <g>
    <ellipse cx="300" cy="300" rx="300" ry="380" fill={palette.mid} opacity="0.5" filter={`url(#${id}-soft)`} />
    {/* hands holding jewelry */}
    <path
      d="M120 480 Q180 420 240 440 Q300 460 360 440 Q420 420 480 480 L480 600 L120 600 Z"
      fill={palette.mid}
    />
    {/* jewelry on display */}
    <circle cx="240" cy="380" r="22" fill={`url(#${id}-metal)`} />
    <circle cx="240" cy="380" r="22" fill="none" stroke={palette.warm} strokeWidth="1" />
    <circle cx="360" cy="370" r="18" fill={`url(#${id}-metal)`} />
    <path
      d="M220 420 Q300 460 380 420"
      stroke={`url(#${id}-metal)`}
      strokeWidth="2"
      fill="none"
    />
    <circle cx="300" cy="455" r="6" fill={palette.accent} />
  </g>
)

// UGC Reel art — vertical, warmer lifestyle
const ReelArt = ({ id, palette, variant = 0 }) => {
  const variants = [
    // ear stack
    <g key="0">
      <ellipse cx="200" cy="450" rx="200" ry="380" fill={palette.mid} opacity="0.6" filter={`url(#${id}-soft)`} />
      <path d="M150 350 Q120 460 200 540" fill="none" stroke={palette.mid} strokeWidth="3" />
      {[200, 240, 280, 320, 360].map((y, i) => (
        <circle key={i} cx="160" cy={y} r={i === 2 ? 10 : 6} fill={palette.accent} />
      ))}
    </g>,
    // necklace
    <g key="1">
      <ellipse cx="200" cy="450" rx="200" ry="380" fill={palette.mid} opacity="0.6" filter={`url(#${id}-soft)`} />
      <path d="M80 380 Q200 600 320 380" stroke={`url(#${id}-metal)`} strokeWidth="3" fill="none" />
      <circle cx="200" cy="560" r="20" fill={palette.accent} />
    </g>,
    // hand holding earring
    <g key="2">
      <ellipse cx="200" cy="450" rx="200" ry="380" fill={palette.mid} opacity="0.6" filter={`url(#${id}-soft)`} />
      <path d="M120 500 Q160 420 200 460 Q240 420 280 500" fill={palette.mid} />
      <circle cx="200" cy="400" r="14" fill={palette.accent} />
    </g>,
    // huggie close up
    <g key="3">
      <ellipse cx="200" cy="450" rx="200" ry="380" fill={palette.mid} opacity="0.6" filter={`url(#${id}-soft)`} />
      <ellipse cx="200" cy="450" rx="90" ry="110" fill={`url(#${id}-metal)`} />
      <ellipse cx="180" cy="420" rx="30" ry="50" fill="#fff" opacity="0.4" />
    </g>,
  ]
  return variants[variant % variants.length]
}

const ART_MAP = {
  earCuff: EarCuff,
  floralNecklace: FloralNecklace,
  sphereHuggie: SphereHuggie,
  laceDrop: LaceDrop,
  giftSet: GiftSet,
  earringsTile: EarringsTile,
  necklacesTile: NecklacesTile,
  huggiesTile: HuggiesTile,
  heroModel: HeroModel,
  storyArt: StoryArt,
}

const JewelryArt = ({
  art,
  palette = "aubergine",
  className = "",
  ratio = "1/1",
  variant,
  ...rest
}) => {
  const Component = ART_MAP[art]
  const id = `art-${art}-${palette}-${variant ?? 0}`
  const pal = PALETTES[palette] || PALETTES.aubergine

  return (
    <div
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      <Frame id={id} palette={pal} className="absolute inset-0 h-full w-full">
        {Component ? <Component id={id} palette={pal} /> : null}
      </Frame>
    </div>
  )
}

export const ReelFrame = ({ palette = "model", variant = 0, className = "" }) => {
  const id = `reel-${palette}-${variant}`
  const pal = PALETTES[palette] || PALETTES.model
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Frame
        id={id}
        palette={pal}
        viewBox="0 0 400 700"
        className="absolute inset-0 h-full w-full"
      >
        <ReelArt id={id} palette={pal} variant={variant} />
      </Frame>
    </div>
  )
}

export default JewelryArt
