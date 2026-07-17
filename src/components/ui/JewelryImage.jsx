import { cn } from "@/lib/utils";

/**
 * Editorial warm-lit jewelry illustration.
 * Renders an inline SVG that evokes gold jewelry photography on a warm,
 * softly-lit background. Each (art, palette, variant) combination produces
 * a unique composition. Swap this component for <img> tags when real
 * product photography is available.
 */

const palettes = {
  amber: {
    bg: "#241B12",
    bg2: "#1A130C",
    glow: "#5C3F1F",
    gold1: "#E8C98A",
    gold2: "#B8935A",
    gold3: "#8E6E3F",
    accent: "#F1E0B8",
  },
  blush: {
    bg: "#2A1A1A",
    bg2: "#1F1212",
    glow: "#5A2F33",
    gold1: "#E8C98A",
    gold2: "#C29272",
    gold3: "#8B5A4D",
    accent: "#E0B6B0",
  },
  honey: {
    bg: "#1F1A12",
    bg2: "#15110A",
    glow: "#4A3A1E",
    gold1: "#F0D396",
    gold2: "#C49A5A",
    gold3: "#8B6A3A",
    accent: "#F4E2BB",
  },
  champagne: {
    bg: "#26211A",
    bg2: "#1B1812",
    glow: "#5A4A2E",
    gold1: "#F0DCB0",
    gold2: "#C4A57A",
    gold3: "#8E7748",
    accent: "#EAD8B0",
  },
  warm: {
    bg: "#1A1612",
    bg2: "#100D0A",
    glow: "#3F2F1E",
    gold1: "#E8C98A",
    gold2: "#B8935A",
    gold3: "#8E6E3F",
    accent: "#F1E0B8",
  },
};

function Backdrop({ p, id }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-spot`} cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor={p.glow} stopOpacity="0.85" />
          <stop offset="60%" stopColor={p.bg2} stopOpacity="0.4" />
          <stop offset="100%" stopColor={p.bg2} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-floor`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.bg} />
          <stop offset="100%" stopColor={p.bg2} />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.gold1} />
          <stop offset="55%" stopColor={p.gold2} />
          <stop offset="100%" stopColor={p.gold3} />
        </linearGradient>
        <linearGradient id={`${id}-gold2`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.gold1} />
          <stop offset="50%" stopColor={p.gold2} />
          <stop offset="100%" stopColor={p.gold3} />
        </linearGradient>
        <linearGradient id={`${id}-bezel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.gold1} />
          <stop offset="50%" stopColor={p.gold2} />
          <stop offset="100%" stopColor={p.gold3} />
        </linearGradient>
        <radialGradient id={`${id}-stone`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%" stopColor={p.accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={p.gold3} stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id={`${id}-bubble`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="40%" stopColor={p.gold1} stopOpacity="0.5" />
          <stop offset="100%" stopColor={p.gold2} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id}-floor)`} />
      <rect width="100%" height="100%" fill={`url(#${id}-spot)`} />
    </>
  );
}

function EarcuffArt({ p, id }) {
  // Curved gold ear cuff with crystal
  return (
    <g transform="translate(200 240)">
      {/* Outer arc */}
      <path
        d="M -120 0 Q -80 -120 0 -130 Q 110 -130 130 -20 Q 130 80 50 90"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* Highlight */}
      <path
        d="M -110 -10 Q -75 -110 0 -118 Q 100 -118 118 -18"
        fill="none"
        stroke={p.gold1}
        strokeOpacity="0.55"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Crystal */}
      <ellipse cx="60" cy="60" rx="28" ry="34" fill={`url(#${id}-stone)`} />
      <ellipse cx="52" cy="50" rx="8" ry="6" fill="#fff" fillOpacity="0.85" />
      {/* Bezel */}
      <ellipse
        cx="60"
        cy="60"
        rx="34"
        ry="40"
        fill="none"
        stroke={`url(#${id}-bezel)`}
        strokeWidth="5"
      />
    </g>
  );
}

function FloraArt({ p, id }) {
  // Floral cluster pendant
  const flowers = [
    { x: 0, y: 0, r: 28, c: p.accent },
    { x: -55, y: 25, r: 18, c: p.gold1 },
    { x: 55, y: 18, r: 22, c: "#D8A89E" },
    { x: -30, y: 70, r: 14, c: "#E2B6A0" },
    { x: 35, y: 75, r: 16, c: p.gold2 },
    { x: -10, y: 110, r: 10, c: p.accent },
  ];
  return (
    <g transform="translate(200 220)">
      {/* Chain */}
      <path
        d="M -160 -180 Q 0 -100 160 -180"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2.5"
      />
      <path
        d="M -160 -180 Q 0 -100 160 -180"
        fill="none"
        stroke={p.gold1}
        strokeOpacity="0.5"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      {/* Connector */}
      <circle cx="0" cy="-40" r="6" fill={p.gold2} />
      {/* Flowers */}
      {flowers.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y})`}>
          {Array.from({ length: 6 }).map((_, k) => {
            const a = (k / 6) * Math.PI * 2;
            return (
              <ellipse
                key={k}
                cx={Math.cos(a) * f.r * 0.8}
                cy={Math.sin(a) * f.r * 0.8}
                rx={f.r * 0.55}
                ry={f.r * 0.35}
                transform={`rotate(${(k * 60).toFixed(1)} ${Math.cos(a) * f.r * 0.8} ${Math.sin(a) * f.r * 0.8})`}
                fill={f.c}
                opacity="0.9"
              />
            );
          })}
          <circle r={f.r * 0.5} fill={`url(#${id}-bubble)`} />
        </g>
      ))}
    </g>
  );
}

function HuggiesArt({ p, id }) {
  // Pair of dome huggies
  return (
    <g>
      {[140, 280].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 240)`}>
          <ellipse
            cx="0"
            cy="0"
            rx="80"
            ry="82"
            fill={`url(#${id}-gold)`}
          />
          <ellipse
            cx="-18"
            cy="-22"
            rx="32"
            ry="22"
            fill={p.gold1}
            opacity="0.75"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="80"
            ry="82"
            fill="none"
            stroke={p.gold3}
            strokeWidth="3"
          />
          {/* Tiny stone */}
          <circle cx="0" cy="60" r="10" fill={`url(#${id}-stone)`} />
        </g>
      ))}
    </g>
  );
}

function LaceArt({ p, id }) {
  // Two filigree drop earrings
  return (
    <g>
      {[140, 280].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 120)`}>
          {/* Hook */}
          <path
            d="M 0 -60 Q 0 -90 20 -90 Q 40 -90 40 -70"
            fill="none"
            stroke={`url(#${id}-gold)`}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Filigree body */}
          <g transform="translate(0 0)">
            <path
              d="M -40 0 Q 0 -25 40 0 Q 30 50 0 80 Q -30 50 -40 0 Z"
              fill={`url(#${id}-gold)`}
            />
            {/* Filigree pattern */}
            <path
              d="M -28 12 Q 0 -10 28 12 M -22 30 Q 0 14 22 30 M -14 50 Q 0 38 14 50"
              fill="none"
              stroke={p.bg2}
              strokeOpacity="0.55"
              strokeWidth="1.4"
            />
            <path
              d="M -8 65 Q 0 58 8 65"
              fill="none"
              stroke={p.bg2}
              strokeOpacity="0.55"
              strokeWidth="1.4"
            />
            {/* Dangle */}
            <circle cx="0" cy="95" r="9" fill={p.accent} />
            <circle cx="0" cy="95" r="9" fill="none" stroke={p.gold3} strokeWidth="1.2" />
            <line x1="0" y1="80" x2="0" y2="86" stroke={p.gold3} strokeWidth="1.2" />
          </g>
        </g>
      ))}
    </g>
  );
}

function SetArt({ p, id }) {
  // Set: small huggies + pendant
  return (
    <g>
      {/* Huggies pair (left) */}
      <g transform="translate(90 220)">
        {[0, 60].map((dy, i) => (
          <g key={i} transform={`translate(0 ${dy})`}>
            <ellipse rx="22" ry="22" fill={`url(#${id}-gold)`} />
            <ellipse cx="-6" cy="-6" rx="8" ry="5" fill={p.gold1} opacity="0.7" />
          </g>
        ))}
      </g>
      {/* Pendant (right) */}
      <g transform="translate(290 200)">
        <path
          d="M -60 -120 Q 0 -70 60 -120"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="1.8"
        />
        <circle cx="0" cy="-30" r="4" fill={p.gold2} />
        <path
          d="M -22 30 L 0 -10 L 22 30 L 12 60 L -12 60 Z"
          fill={`url(#${id}-stone)`}
          stroke={p.gold3}
          strokeWidth="1.2"
        />
        <ellipse cx="-6" cy="20" rx="5" ry="3" fill="#fff" opacity="0.7" />
      </g>
    </g>
  );
}

function EarringsTileArt({ id }) {
  // Generic earrings tile
  return (
    <g>
      {[140, 280].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 220)`}>
          <path
            d="M 0 -60 Q 0 -90 24 -90 Q 48 -90 48 -65"
            fill="none"
            stroke={`url(#${id}-gold)`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <ellipse cx="24" cy="-30" rx="36" ry="50" fill={`url(#${id}-gold)`} />
          <ellipse cx="14" cy="-44" rx="12" ry="8" fill="#fff" opacity="0.45" />
        </g>
      ))}
    </g>
  );
}

function NecklacesTileArt({ id }) {
  return (
    <g transform="translate(200 220)">
      <path
        d="M -150 -120 Q 0 -50 150 -120"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2"
      />
      <circle cx="0" cy="-40" r="6" fill="#C49A5A" />
      <g transform="translate(0 30)">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle
            key={i}
            cx={(i - 3) * 12}
            cy={Math.abs(i - 3) * 4}
            r="3.5"
            fill="#E8C98A"
            opacity="0.85"
          />
        ))}
        <circle cx="0" cy="22" r="9" fill={`url(#${id}-stone)`} />
      </g>
    </g>
  );
}

function HuggiesTileArt({ id }) {
  return (
    <g>
      {[140, 280].map((cx, i) => (
        <g key={i} transform={`translate(${cx} 240)`}>
          <ellipse rx="80" ry="80" fill={`url(#${id}-gold)`} />
          <ellipse cx="-18" cy="-22" rx="30" ry="20" fill="#fff" opacity="0.25" />
        </g>
      ))}
    </g>
  );
}

function HeroArt({ id }) {
  // Editorial hero illustration: model silhouette with earrings
  return (
    <g>
      {/* Soft warm gradient overlay for atmosphere */}
      <defs>
        <radialGradient id={`${id}-heroGlow`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#7A5430" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0E0A06" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-heroGlow)`} />

      {/* Abstract model silhouette (neck + ear) */}
      <g transform="translate(380 380)">
        <path
          d="M -120 80 Q -80 0 -60 -80 Q -50 -180 -10 -220 Q 30 -260 80 -250 Q 130 -240 150 -180 Q 170 -120 140 -60 Q 110 0 80 80 Z"
          fill="#3A2A1E"
          opacity="0.85"
        />
        <path
          d="M -120 80 Q -80 0 -60 -80 Q -50 -180 -10 -220"
          fill="none"
          stroke="#8B6A3A"
          strokeWidth="1.2"
          opacity="0.5"
        />
        {/* Earring — gold drop */}
        <g transform="translate(60 -120)">
          <path
            d="M 0 -20 Q 0 -40 20 -40 Q 40 -40 40 -20"
            fill="none"
            stroke="url(#heroGold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse cx="20" cy="0" rx="16" ry="22" fill="url(#heroGold)" />
          <ellipse cx="14" cy="-8" rx="5" ry="3" fill="#fff" opacity="0.6" />
        </g>
        {/* Second earring on the other side */}
        <g transform="translate(-60 -160)">
          <path
            d="M 0 -20 Q 0 -40 -20 -40 Q -40 -40 -40 -20"
            fill="none"
            stroke="url(#heroGold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse cx="-20" cy="0" rx="16" ry="22" fill="url(#heroGold)" />
        </g>
        <defs>
          <linearGradient id="heroGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0DCB0" />
            <stop offset="55%" stopColor="#C4A57A" />
            <stop offset="100%" stopColor="#8B6A3A" />
          </linearGradient>
        </defs>
        {/* Necklace */}
        <path
          d="M -100 40 Q 0 90 100 40"
          fill="none"
          stroke="url(#heroGold)"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="62" r="5" fill="#E8C98A" />
      </g>
    </g>
  );
}

function StoryArt({ id }) {
  // Brand story: hands holding jewelry
  return (
    <g>
      <g transform="translate(200 240)">
        {/* Hand 1 */}
        <path
          d="M -150 0 Q -120 -30 -80 -20 Q -50 -10 -30 10 L -10 30 Q 0 50 -10 80 L -30 110 Q -60 130 -110 120 Q -150 110 -160 70 Z"
          fill="#3A2A1E"
        />
        {/* Hand 2 */}
        <path
          d="M 150 0 Q 120 -30 80 -20 Q 50 -10 30 10 L 10 30 Q 0 50 10 80 L 30 110 Q 60 130 110 120 Q 150 110 160 70 Z"
          fill="#4A3624"
        />
        {/* Ring between hands */}
        <g transform="translate(0 30)">
          <ellipse rx="40" ry="42" fill="none" stroke="#E8C98A" strokeWidth="6" />
          <ellipse rx="40" ry="42" fill="none" stroke="#B8935A" strokeWidth="2" />
          {/* Stone */}
          <ellipse cx="0" cy="-38" rx="10" ry="14" fill="#F0DCB0" />
          <ellipse cx="-3" cy="-42" rx="3" ry="2" fill="#fff" opacity="0.85" />
        </g>
      </g>
    </g>
  );
}

function TestimonialArt({ id, idx = 0 }) {
  // Soft portrait-ish abstract: warm gradient circle + necklace suggestion
  const variants = [
    { skin: "#D8B89A", tone: "#8E6E3F" },
    { skin: "#C49E7C", tone: "#A07F4B" },
    { skin: "#E0C2A4", tone: "#8B6A3A" },
  ];
  const v = variants[idx % variants.length];
  return (
    <g>
      <defs>
        <radialGradient id={`${id}-testBg`} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#3A2A1E" />
          <stop offset="100%" stopColor="#15110A" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-testBg)`} />
      {/* Abstract face/shoulder */}
      <g transform="translate(100 140)">
        <ellipse cx="0" cy="0" rx="55" ry="70" fill={v.skin} />
        <path
          d="M -75 80 Q 0 110 75 80 L 90 200 L -90 200 Z"
          fill={v.skin}
          opacity="0.9"
        />
        {/* Hair */}
        <path
          d="M -60 -20 Q -70 -70 0 -75 Q 70 -70 60 -20 Q 50 -10 0 -10 Q -50 -10 -60 -20 Z"
          fill="#2A1F15"
        />
        {/* Earring */}
        <circle cx="42" cy="22" r="4" fill={v.tone} />
        <line x1="42" y1="26" x2="42" y2="42" stroke={v.tone} strokeWidth="1.5" />
        <ellipse cx="42" cy="48" rx="5" ry="7" fill={v.tone} />
      </g>
    </g>
  );
}

function UgcArt({ id, idx = 0 }) {
  // 9:16 portrait-style jewelry shot
  const scenes = [
    { bg1: "#2A1F15", bg2: "#15100A", tone: "#E8C98A" },
    { bg1: "#241914", bg2: "#100C08", tone: "#F0DCB0" },
    { bg1: "#2C2018", bg2: "#15100A", tone: "#D8B08A" },
    { bg1: "#1F1812", bg2: "#0E0A06", tone: "#E0B48A" },
    { bg1: "#2A1C12", bg2: "#120C08", tone: "#E8C98A" },
  ];
  const s = scenes[idx % scenes.length];
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-ugcBg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={s.bg1} />
          <stop offset="100%" stopColor={s.bg2} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-ugcBg)`} />
      {/* Side profile of neck + ear with earring */}
      <g transform="translate(100 180)">
        <path
          d="M -30 -60 Q 30 -80 50 -40 Q 60 0 40 60 L 30 140 L -10 160 L -30 100 Z"
          fill="#3A2A1E"
        />
        <path
          d="M -30 -60 Q 30 -80 50 -40 Q 60 0 40 60"
          fill="none"
          stroke="#5A4232"
          strokeWidth="0.8"
          opacity="0.6"
        />
        {/* Earring drop */}
        <g transform="translate(40 0)">
          <path
            d="M 0 -20 Q 10 -30 20 -20"
            fill="none"
            stroke={s.tone}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse cx="20" cy="0" rx="10" ry="14" fill={s.tone} />
          <ellipse cx="16" cy="-4" rx="3" ry="2" fill="#fff" opacity="0.6" />
        </g>
      </g>
    </g>
  );
}

const artMap = {
  earcuff: EarcuffArt,
  flora: FloraArt,
  huggies: HuggiesArt,
  lace: LaceArt,
  set: SetArt,
  earrings: EarringsTileArt,
  necklaces: NecklacesTileArt,
  hero: HeroArt,
  story: StoryArt,
  testimonial: TestimonialArt,
  ugc: UgcArt,
};

export function JewelryImage({
  art = "earrings",
  palette = "warm",
  variant = 0,
  alt = "",
  className,
  ratio = "3/4",
  rounded = "rounded-none",
}) {
  const id = `ji-${art}-${palette}-${variant}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
  const p = palettes[palette] || palettes.warm;
  const Art = artMap[art] || EarringsTileArt;

  const isHero = art === "hero";
  const isUgc = art === "ugc";
  const isTestimonial = art === "testimonial";
  const isStory = art === "story";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-espresso",
        rounded,
        className,
      )}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
      role={alt ? "img" : "presentation"}
      aria-label={alt || undefined}
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <Backdrop p={p} id={id} />
        {isHero ? (
          <HeroArt id={id} />
        ) : isUgc ? (
          <UgcArt id={id} idx={variant} />
        ) : isTestimonial ? (
          <TestimonialArt id={id} idx={variant} />
        ) : isStory ? (
          <StoryArt id={id} />
        ) : (
          <Art p={p} id={id} />
        )}
        {/* Subtle film grain */}
        <rect width="100%" height="100%" fill="url(#noise)" opacity="0.04" />
      </svg>
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, transparent 50%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </div>
  );
}

export default JewelryImage;
