// Elegant inline SVG product placeholders. All on warm bone/sand backgrounds
// with brushed-gold forms so the storefront looks editorial even before
// real photography is dropped in.
//
// Each placeholder accepts (className, alt) and returns a real <img>-shaped
// element. The actual swap to real photos is a one-line change later —
// replace <ProductImage id="..." /> with <img src={...} /> and pass your CDN.

import { cn } from "@/lib/utils"

const PALETTE = {
  bg: "#F5EFE6",
  bg2: "#E8DCC9",
  bg3: "#3F2F27",
  bg4: "#2A1F1A",
  gold: "#C19F6E",
  goldHi: "#E2CDA5",
  goldLo: "#7A5E37",
  shadow: "#3F2F27",
}

const defs = (id) => (
  <defs>
    <radialGradient id={`${id}-bg`} cx="50%" cy="40%" r="70%">
      <stop offset="0%"  stopColor={PALETTE.bg} />
      <stop offset="100%" stopColor={PALETTE.bg2} />
    </radialGradient>
    <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stopColor={PALETTE.goldHi} />
      <stop offset="50%" stopColor={PALETTE.gold} />
      <stop offset="100%" stopColor={PALETTE.goldLo} />
    </linearGradient>
    <linearGradient id={`${id}-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"  stopColor={PALETTE.bg3} />
      <stop offset="100%" stopColor={PALETTE.bg4} />
    </linearGradient>
    <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" />
    </filter>
  </defs>
)

const wrap = (id, className, viewBox = "0 0 600 800", children) => (
  <svg
    role="img"
    className={cn("block w-full h-full", className)}
    viewBox={viewBox}
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    {defs(id)}
    {children}
  </svg>
)

// ---------- Individual product illustrations ----------

function EarCuffCrystal({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill={`url(#${id}-bg)`} />
      <ellipse cx="300" cy="720" rx="160" ry="14" fill={PALETTE.shadow} opacity="0.15" filter={`url(#${id}-soft)`} />
      {/* ear silhouette */}
      <path
        d="M300 220 C220 230 200 320 210 410 C218 480 250 540 300 560 L300 220 Z"
        fill={PALETTE.bg3} opacity="0.85"
      />
      {/* gold cuff wrapping the cartilage */}
      <path
        d="M225 290 C225 270 250 258 285 260 C320 262 340 280 340 300"
        fill="none" stroke={`url(#${id}-gold)`} strokeWidth="14" strokeLinecap="round"
      />
      {/* crystal accent */}
      <circle cx="340" cy="305" r="10" fill={PALETTE.bg} opacity="0.9" />
      <circle cx="340" cy="305" r="6" fill={`url(#${id}-gold)`} />
      <circle cx="337" cy="302" r="2" fill={PALETTE.goldHi} />
      {/* highlight on cuff */}
      <path d="M232 286 C240 278 258 272 280 270" stroke={PALETTE.goldHi} strokeWidth="2" fill="none" opacity="0.7" />
    </g>
  )
}

function FloralNecklace({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill={`url(#${id}-bg)`} />
      <ellipse cx="300" cy="720" rx="180" ry="14" fill={PALETTE.shadow} opacity="0.15" filter={`url(#${id}-soft)`} />
      {/* chain */}
      <path
        d="M120 320 C200 380 300 440 400 380 C460 350 480 320 480 320"
        fill="none" stroke={`url(#${id}-gold)`} strokeWidth="2.5"
      />
      <path
        d="M120 320 C200 380 300 440 400 380 C460 350 480 320 480 320"
        fill="none" stroke={PALETTE.goldHi} strokeWidth="0.8" opacity="0.6"
      />
      {/* floral centerpiece: layered petals */}
      {[
        { cx: 300, cy: 480, r: 28, c: "#C19F6E" },
        { cx: 280, cy: 460, r: 22, c: "#A78A5C" },
        { cx: 320, cy: 460, r: 22, c: "#A78A5C" },
        { cx: 280, cy: 500, r: 22, c: "#A78A5C" },
        { cx: 320, cy: 500, r: 22, c: "#A78A5C" },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.c} opacity="0.85" />
      ))}
      {/* gemstone accents */}
      <circle cx="300" cy="480" r="10" fill="#9B2D2D" />
      <circle cx="300" cy="480" r="6"  fill="#C44545" />
      <circle cx="262" cy="460" r="6"  fill="#3B6A4A" />
      <circle cx="338" cy="460" r="6"  fill="#3B6A4A" />
      <circle cx="262" cy="500" r="6"  fill="#D4AF37" />
      <circle cx="338" cy="500" r="6"  fill="#3B6A4A" />
      <circle cx="300" cy="480" r="3"  fill="#F5EFE6" />
    </g>
  )
}

function GoldenSphereHuggies({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill={`url(#${id}-bg)`} />
      <ellipse cx="300" cy="700" rx="200" ry="12" fill={PALETTE.shadow} opacity="0.18" filter={`url(#${id}-soft)`} />
      {/* left huggie - sphere */}
      <circle cx="200" cy="380" r="80" fill={`url(#${id}-gold)`} />
      <circle cx="200" cy="380" r="80" fill="none" stroke={PALETTE.goldLo} strokeWidth="2" />
      <ellipse cx="180" cy="350" rx="32" ry="20" fill={PALETTE.goldHi} opacity="0.5" />
      <circle cx="200" cy="380" r="14" fill={PALETTE.goldLo} opacity="0.6" />
      {/* post */}
      <rect x="276" y="372" width="50" height="16" rx="8" fill={`url(#${id}-gold)`} />
      {/* right huggie - sphere */}
      <circle cx="420" cy="380" r="80" fill={`url(#${id}-gold)`} />
      <circle cx="420" cy="380" r="80" fill="none" stroke={PALETTE.goldLo} strokeWidth="2" />
      <ellipse cx="400" cy="350" rx="32" ry="20" fill={PALETTE.goldHi} opacity="0.5" />
      <circle cx="420" cy="380" r="14" fill={PALETTE.goldLo} opacity="0.6" />
      <rect x="294" y="372" width="50" height="16" rx="8" fill={`url(#${id}-gold)`} transform="translate(0 0)" />
    </g>
  )
}

function AmberLaceDrop({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill={`url(#${id}-bg)`} />
      <ellipse cx="300" cy="730" rx="200" ry="12" fill={PALETTE.shadow} opacity="0.16" filter={`url(#${id}-soft)`} />
      {/* filigree teardrop frame */}
      <path
        d="M300 180 C220 220 200 360 240 480 C260 540 300 600 300 660 C300 600 340 540 360 480 C400 360 380 220 300 180 Z"
        fill={`url(#${id}-gold)`} opacity="0.9"
      />
      {/* inner filigree pattern */}
      <path
        d="M300 220 C260 260 250 360 280 460 C290 500 300 540 300 580 C300 540 310 500 320 460 C350 360 340 260 300 220 Z"
        fill="none" stroke={PALETTE.goldLo} strokeWidth="1.5" opacity="0.7"
      />
      <path
        d="M300 250 C270 320 280 400 300 470 M300 250 C330 320 320 400 300 470"
        fill="none" stroke={PALETTE.goldLo} strokeWidth="1" opacity="0.5"
      />
      {/* amber teardrop gem */}
      <path
        d="M300 320 C280 350 280 400 300 430 C320 400 320 350 300 320 Z"
        fill="#B8742A"
      />
      <path
        d="M300 320 C285 350 285 395 300 425 C315 395 315 350 300 320 Z"
        fill="#D8942F" opacity="0.7"
      />
      <ellipse cx="293" cy="345" rx="5" ry="14" fill={PALETTE.goldHi} opacity="0.6" />
      {/* top hook */}
      <circle cx="300" cy="170" r="10" fill="none" stroke={PALETTE.gold} strokeWidth="3" />
    </g>
  )
}

function HeirloomSet({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill={`url(#${id}-dark)`} />
      <ellipse cx="300" cy="700" rx="220" ry="12" fill="#000" opacity="0.5" filter={`url(#${id}-soft)`} />
      {/* gift box */}
      <rect x="170" y="320" width="260" height="320" rx="6" fill="#3F2F27" />
      <rect x="170" y="320" width="260" height="320" rx="6" fill="none" stroke={PALETTE.gold} strokeWidth="1.5" />
      {/* ribbon vertical */}
      <rect x="288" y="320" width="24" height="320" fill={PALETTE.gold} />
      <rect x="288" y="320" width="24" height="320" fill="none" stroke={PALETTE.goldLo} strokeWidth="0.5" />
      {/* ribbon horizontal */}
      <rect x="170" y="468" width="260" height="24" fill={PALETTE.gold} />
      <rect x="170" y="468" width="260" height="24" fill="none" stroke={PALETTE.goldLo} strokeWidth="0.5" />
      {/* bow */}
      <path d="M260 460 C240 430 230 410 240 400 C260 410 280 430 300 460" fill={PALETTE.gold} />
      <path d="M340 460 C360 430 370 410 360 400 C340 410 320 430 300 460" fill={PALETTE.gold} />
      <circle cx="300" cy="465" r="10" fill={PALETTE.goldLo} />
      {/* earring peeking */}
      <circle cx="300" cy="280" r="22" fill="none" stroke={PALETTE.gold} strokeWidth="2.5" />
      <circle cx="300" cy="280" r="6" fill={PALETTE.goldHi} />
      {/* necklace peek */}
      <path
        d="M150 200 C220 260 300 280 380 260 C420 250 450 230 470 200"
        fill="none" stroke={PALETTE.gold} strokeWidth="2"
      />
      {/* tiny gold specks */}
      <circle cx="220" cy="170" r="2" fill={PALETTE.goldHi} />
      <circle cx="400" cy="180" r="2" fill={PALETTE.goldHi} />
    </g>
  )
}

// ---------- Lifestyle / editorial illustrations ----------

function HeroModel({ id, className }) {
  return wrap(id, className, "0 0 1600 1000",
    <g>
      <defs>
        <radialGradient id={`${id}-spot`} cx="60%" cy="40%" r="60%">
          <stop offset="0%"  stopColor="#7A5E37" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#2A1F1A" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1A1310" />
        </radialGradient>
        <linearGradient id={`${id}-skin`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#D8B89A" />
          <stop offset="100%" stopColor="#8C6B53" />
        </linearGradient>
        <linearGradient id={`${id}-gold2`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="50%" stopColor="#C19F6E" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill={`url(#${id}-spot)`} />
      {/* silhouette - head + neck + shoulder */}
      <ellipse cx="900" cy="420" rx="170" ry="210" fill={`url(#${id}-skin)`} />
      <path d="M780 600 C780 720 820 820 900 900 C980 820 1020 720 1020 600 L780 600 Z" fill={`url(#${id}-skin)`} opacity="0.9" />
      {/* hair sweep */}
      <path
        d="M740 380 C740 280 820 220 900 220 C990 220 1060 290 1060 380 C1050 360 1010 320 970 320 C940 320 920 340 900 340 C860 340 800 320 760 340 C750 350 745 365 740 380 Z"
        fill="#1A1310"
      />
      {/* earring - drop */}
      <circle cx="1080" cy="500" r="6" fill={`url(#${id}-gold2)`} />
      <path d="M1080 506 L1080 560" stroke={`url(#${id}-gold2)`} strokeWidth="2" />
      <ellipse cx="1080" cy="580" rx="14" ry="20" fill={`url(#${id}-gold2)`} />
      <ellipse cx="1076" cy="572" rx="4" ry="8" fill="#E2CDA5" opacity="0.7" />
      {/* neckline chain */}
      <path
        d="M780 620 C840 700 960 700 1020 620"
        fill="none" stroke={`url(#${id}-gold2)`} strokeWidth="2"
      />
      <circle cx="900" cy="700" r="6" fill={`url(#${id}-gold2)`} />
      <circle cx="900" cy="700" r="3" fill="#E2CDA5" />
      {/* warm light rim */}
      <path
        d="M1080 220 C1180 280 1200 480 1100 700"
        fill="none" stroke="#E2CDA5" strokeWidth="3" opacity="0.35"
      />
    </g>
  )
}

function EditorialSplit({ id, className }) {
  return wrap(id, className, "0 0 800 1000",
    <g>
      <defs>
        <linearGradient id={`${id}-gold3`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="60%" stopColor="#B08D57" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="#E8DCC9" />
      {/* hand silhouette holding jewelry */}
      <path
        d="M120 1000 L120 700 C160 640 240 600 320 600 C400 600 480 640 520 700 L520 1000 Z"
        fill="#C9A78B"
      />
      <ellipse cx="320" cy="600" rx="200" ry="40" fill="#A88764" />
      {/* ring on finger */}
      <circle cx="280" cy="560" r="22" fill="none" stroke={`url(#${id}-gold3)`} strokeWidth="6" />
      <circle cx="280" cy="555" r="6" fill="#E2CDA5" />
      {/* bracelet */}
      <ellipse cx="320" cy="660" rx="180" ry="14" fill="none" stroke={`url(#${id}-gold3)`} strokeWidth="5" />
      {/* gold chain draped */}
      <path
        d="M120 800 C220 860 420 860 520 800"
        fill="none" stroke={`url(#${id}-gold3)`} strokeWidth="2.5"
      />
      {/* light specks */}
      <circle cx="180" cy="240" r="3" fill="#E2CDA5" opacity="0.7" />
      <circle cx="620" cy="320" r="3" fill="#E2CDA5" opacity="0.7" />
      <circle cx="540" cy="160" r="2" fill="#E2CDA5" opacity="0.5" />
    </g>
  )
}

function CategoryEarrings({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill="#3F2F27" />
      <ellipse cx="300" cy="400" rx="80" ry="100" fill="#C9A78B" />
      <ellipse cx="300" cy="380" rx="22" ry="14" fill="#A88764" />
      {/* statement earring - long tassel */}
      <circle cx="380" cy="380" r="8" fill="#E2CDA5" />
      <line x1="380" y1="388" x2="380" y2="500" stroke="#E2CDA5" strokeWidth="2" />
      <line x1="380" y1="388" x2="370" y2="500" stroke="#C19F6E" strokeWidth="1.5" />
      <line x1="380" y1="388" x2="390" y2="500" stroke="#C19F6E" strokeWidth="1.5" />
      <line x1="380" y1="388" x2="400" y2="500" stroke="#C19F6E" strokeWidth="1.5" />
      <line x1="380" y1="388" x2="360" y2="500" stroke="#C19F6E" strokeWidth="1.5" />
      {/* gold specks */}
      <circle cx="200" cy="200" r="2" fill="#E2CDA5" opacity="0.5" />
      <circle cx="500" cy="600" r="2" fill="#E2CDA5" opacity="0.5" />
    </g>
  )
}

function CategoryNecklaces({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill="#2A1F1A" />
      {/* layered chains on dark */}
      <path d="M100 300 C200 420 400 420 500 300" fill="none" stroke="#E2CDA5" strokeWidth="2" />
      <path d="M120 340 C220 460 380 460 480 340" fill="none" stroke="#C19F6E" strokeWidth="1.5" />
      <path d="M140 380 C240 500 360 500 460 380" fill="none" stroke="#7A5E37" strokeWidth="1" />
      <circle cx="300" cy="500" r="12" fill="#E2CDA5" />
      <circle cx="300" cy="500" r="6" fill="#7A5E37" />
      {/* pendant gem */}
      <path d="M300 510 C290 540 290 570 300 590 C310 570 310 540 300 510 Z" fill="#B8742A" />
      {/* warm glow */}
      <circle cx="300" cy="500" r="60" fill="#7A5E37" opacity="0.2" />
    </g>
  )
}

function CategoryHuggies({ id, className }) {
  return wrap(id, className, "0 0 600 800",
    <g>
      <rect width="600" height="800" fill="#574739" />
      {/* pair of huggies */}
      <circle cx="220" cy="400" r="100" fill="none" stroke="#E2CDA5" strokeWidth="22" />
      <circle cx="220" cy="400" r="100" fill="none" stroke="#7A5E37" strokeWidth="2" />
      <ellipse cx="195" cy="365" rx="30" ry="18" fill="#F5EFE6" opacity="0.25" />
      <circle cx="380" cy="400" r="100" fill="none" stroke="#E2CDA5" strokeWidth="22" />
      <circle cx="380" cy="400" r="100" fill="none" stroke="#7A5E37" strokeWidth="2" />
      <ellipse cx="355" cy="365" rx="30" ry="18" fill="#F5EFE6" opacity="0.25" />
    </g>
  )
}

// UGC reel-style vertical cards
function UGCWornEar({ id, className }) {
  return wrap(id, className, "0 0 360 640",
    <g>
      <defs>
        <linearGradient id={`${id}-warm`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#5C4A3D" />
          <stop offset="100%" stopColor="#1F1612" />
        </linearGradient>
        <linearGradient id={`${id}-g`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill={`url(#${id}-warm)`} />
      {/* side of face silhouette */}
      <path
        d="M40 640 L40 300 C60 240 120 200 180 200 C220 200 260 220 280 260 L280 640 Z"
        fill="#C9A78B"
      />
      {/* hair */}
      <path d="M40 300 C40 200 100 140 180 140 C260 140 320 200 320 300 L320 360 L40 360 Z" fill="#1A1310" />
      {/* ear */}
      <path d="M260 320 C240 320 230 350 240 400 C250 440 270 460 280 460 L280 320 Z" fill="#A88764" />
      {/* gold ear stack */}
      <circle cx="265" cy="340" r="5" fill={`url(#${id}-g)`} />
      <circle cx="263" cy="365" r="4" fill={`url(#${id}-g)`} />
      <circle cx="270" cy="395" r="8" fill={`url(#${id}-g)`} />
      <path d="M270 405 L270 440" stroke={`url(#${id}-g)`} strokeWidth="1.5" />
      <ellipse cx="270" cy="450" rx="6" ry="10" fill={`url(#${id}-g)`} />
    </g>
  )
}

function UGCNecklace({ id, className }) {
  return wrap(id, className, "0 0 360 640",
    <g>
      <defs>
        <linearGradient id={`${id}-warm2`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#6B5A50" />
          <stop offset="100%" stopColor="#2A1F1A" />
        </linearGradient>
        <linearGradient id={`${id}-g2`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill={`url(#${id}-warm2)`} />
      {/* neck + chest */}
      <path d="M0 640 L0 280 C40 200 120 160 180 160 C240 160 320 200 360 280 L360 640 Z" fill="#C9A78B" />
      {/* collarbones */}
      <path d="M80 320 C140 360 220 360 280 320" fill="none" stroke="#A88764" strokeWidth="2" opacity="0.6" />
      {/* chain */}
      <path
        d="M60 260 C140 340 220 340 300 260"
        fill="none" stroke={`url(#${id}-g2)`} strokeWidth="2"
      />
      <path
        d="M60 260 C140 340 220 340 300 260"
        fill="none" stroke="#E2CDA5" strokeWidth="0.5" opacity="0.7"
      />
      {/* pendant */}
      <circle cx="180" cy="360" r="14" fill={`url(#${id}-g2)`} />
      <circle cx="180" cy="360" r="6" fill="#7A5E37" />
      <path d="M180 374 C172 390 172 410 180 425 C188 410 188 390 180 374 Z" fill="#B8742A" />
    </g>
  )
}

function UGCHuggies({ id, className }) {
  return wrap(id, className, "0 0 360 640",
    <g>
      <defs>
        <linearGradient id={`${id}-warm3`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#7A5E37" />
          <stop offset="100%" stopColor="#2A1F1A" />
        </linearGradient>
        <linearGradient id={`${id}-g3`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill={`url(#${id}-warm3)`} />
      <path
        d="M0 640 L0 280 C40 200 120 160 180 160 C240 160 320 200 360 280 L360 640 Z"
        fill="#C9A78B"
      />
      <path d="M0 200 C0 100 80 40 180 40 C280 40 360 100 360 200 L360 260 L0 260 Z" fill="#1A1310" />
      {/* big gold hoops */}
      <circle cx="120" cy="340" r="34" fill="none" stroke={`url(#${id}-g3)`} strokeWidth="9" />
      <circle cx="240" cy="340" r="34" fill="none" stroke={`url(#${id}-g3)`} strokeWidth="9" />
      {/* chain */}
      <path d="M60 480 C140 540 220 540 300 480" fill="none" stroke={`url(#${id}-g3)`} strokeWidth="1.5" />
    </g>
  )
}

function UGCFlora({ id, className }) {
  return wrap(id, className, "0 0 360 640",
    <g>
      <defs>
        <linearGradient id={`${id}-warm4`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#4A3A2E" />
          <stop offset="100%" stopColor="#1F1612" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill={`url(#${id}-warm4)`} />
      <path
        d="M0 640 L0 280 C40 200 120 160 180 160 C240 160 320 200 360 280 L360 640 Z"
        fill="#C9A78B"
      />
      <path d="M0 200 C0 100 80 40 180 40 C280 40 360 100 360 200 L360 260 L0 260 Z" fill="#1A1310" />
      {/* floral necklace center */}
      <path d="M80 280 C160 360 200 360 280 280" fill="none" stroke="#C19F6E" strokeWidth="1.5" />
      {[
        { x: 180, y: 400, c: "#C19F6E" },
        { x: 162, y: 380, c: "#A78A5C" },
        { x: 198, y: 380, c: "#A78A5C" },
        { x: 162, y: 420, c: "#A78A5C" },
        { x: 198, y: 420, c: "#A78A5C" },
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === 0 ? 16 : 12} fill={p.c} />
      ))}
      <circle cx="180" cy="400" r="6" fill="#9B2D2D" />
      <circle cx="162" cy="380" r="3" fill="#3B6A4A" />
      <circle cx="198" cy="380" r="3" fill="#D4AF37" />
      <circle cx="162" cy="420" r="3" fill="#3B6A4A" />
      <circle cx="198" cy="420" r="3" fill="#3B6A4A" />
    </g>
  )
}

function UGCFiligree({ id, className }) {
  return wrap(id, className, "0 0 360 640",
    <g>
      <defs>
        <linearGradient id={`${id}-warm5`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#5C4A3D" />
          <stop offset="100%" stopColor="#2A1F1A" />
        </linearGradient>
        <linearGradient id={`${id}-g5`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill={`url(#${id}-warm5)`} />
      <path
        d="M0 640 L0 280 C40 200 120 160 180 160 C240 160 320 200 360 280 L360 640 Z"
        fill="#C9A78B"
      />
      <path d="M0 200 C0 100 80 40 180 40 C280 40 360 100 360 200 L360 260 L0 260 Z" fill="#1A1310" />
      {/* drop earring on ear */}
      <path d="M260 280 C240 280 230 320 240 380 L280 380 L280 280 Z" fill="#A88764" />
      <circle cx="260" cy="310" r="6" fill={`url(#${id}-g5)`} />
      <path
        d="M260 320 C232 360 232 430 260 470 C288 430 288 360 260 320 Z"
        fill={`url(#${id}-g5)`} opacity="0.9"
      />
      <path d="M260 340 C244 380 244 430 260 460 C276 430 276 380 260 340 Z" fill="none" stroke="#7A5E37" strokeWidth="1" />
      <path d="M260 460 C256 470 256 478 260 482 C264 478 264 470 260 460 Z" fill="#B8742A" />
    </g>
  )
}

function UGCSet({ id, className }) {
  return wrap(id, className, "0 0 360 640",
    <g>
      <defs>
        <linearGradient id={`${id}-warm6`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#3F2F27" />
          <stop offset="100%" stopColor="#1A1310" />
        </linearGradient>
        <linearGradient id={`${id}-g6`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#E2CDA5" />
          <stop offset="100%" stopColor="#7A5E37" />
        </linearGradient>
      </defs>
      <rect width="360" height="640" fill={`url(#${id}-warm6)`} />
      <path
        d="M0 640 L0 280 C40 200 120 160 180 160 C240 160 320 200 360 280 L360 640 Z"
        fill="#C9A78B"
      />
      <path d="M0 200 C0 100 80 40 180 40 C280 40 360 100 360 200 L360 260 L0 260 Z" fill="#1A1310" />
      {/* earrings */}
      <circle cx="130" cy="340" r="22" fill="none" stroke={`url(#${id}-g6)`} strokeWidth="6" />
      <circle cx="230" cy="340" r="22" fill="none" stroke={`url(#${id}-g6)`} strokeWidth="6" />
      {/* necklace pendant */}
      <path d="M60 280 C140 350 220 350 300 280" fill="none" stroke={`url(#${id}-g6)`} strokeWidth="1.5" />
      <circle cx="180" cy="380" r="20" fill={`url(#${id}-g6)`} />
      <circle cx="180" cy="380" r="10" fill="#7A5E37" />
    </g>
  )
}

// ---------- Public API ----------

const PLACEHOLDERS = {
  hero: HeroModel,
  "ear-cuff": EarCuffCrystal,
  "floral-necklace": FloralNecklace,
  "huggies-sphere": GoldenSphereHuggies,
  "lace-drop": AmberLaceDrop,
  "heirloom-set": HeirloomSet,
  editorial: EditorialSplit,
  "cat-earrings": CategoryEarrings,
  "cat-necklaces": CategoryNecklaces,
  "cat-huggies": CategoryHuggies,
  "ugc-ear": UGCWornEar,
  "ugc-necklace": UGCNecklace,
  "ugc-huggies": UGCHuggies,
  "ugc-flora": UGCFlora,
  "ugc-filigree": UGCFiligree,
  "ugc-set": UGCSet,
}

export function ProductImage({ id, name, className, variant = 0, ...props }) {
  const Component = PLACEHOLDERS[id]
  if (!Component) {
    return (
      <div className={cn("bg-sand flex items-center justify-center", className)}>
        <span className="eyebrow text-cocoa-50">{name}</span>
      </div>
    )
  }
  // Alternate composition slightly via the variant prop (0 or 1)
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <Component id={`${id}-${variant}`} className="" />
    </div>
  )
}
