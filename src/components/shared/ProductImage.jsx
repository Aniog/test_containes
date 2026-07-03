// SVG product illustrations — hand-composed pieces of jewelry on warm
// dark backdrops. Keeps the storefront consistent and fast (no external
// images), and easy to swap for real photography later.

import { cn } from '@/lib/utils'

const PALETTES = {
  midnight: {
    bg: '#0F0A07',
    bgGrad: 'radial-gradient(ellipse at 50% 40%, #2A1F14 0%, #0F0A07 60%, #0A0705 100%)',
    gold1: '#E8C887',
    gold2: '#B68B4F',
    gold3: '#7A5A30',
    shadow: 'rgba(0,0,0,0.6)',
  },
  velvet: {
    bg: '#1B0E0A',
    bgGrad: 'radial-gradient(ellipse at 50% 35%, #3A1F18 0%, #1B0E0A 60%, #120A07 100%)',
    gold1: '#F0D69A',
    gold2: '#C49C5E',
    gold3: '#8B6634',
    shadow: 'rgba(0,0,0,0.55)',
  },
  sand: {
    bg: '#1F1812',
    bgGrad: 'radial-gradient(ellipse at 50% 45%, #3A2D1F 0%, #1F1812 60%, #14100B 100%)',
    gold1: '#F4E1B0',
    gold2: '#D6B884',
    gold3: '#9A7340',
    shadow: 'rgba(0,0,0,0.6)',
  },
}

function Stage({ children, palette = 'midnight', className }) {
  const p = PALETTES[palette]
  return (
    <svg
      viewBox="0 0 600 600"
      className={cn('w-full h-full block', className)}
      preserveAspectRatio="xMidYMid slice"
      role="img"
    >
      <defs>
        <radialGradient id={`bg-${palette}`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#2A1F14" />
          <stop offset="55%" stopColor={p.bg} />
          <stop offset="100%" stopColor="#070403" />
        </radialGradient>
        <radialGradient id="goldShine" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3D6" />
          <stop offset="35%" stopColor="#E8C887" />
          <stop offset="100%" stopColor="#7A5A30" />
        </radialGradient>
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9A7340" />
          <stop offset="40%" stopColor="#F4E1B0" />
          <stop offset="60%" stopColor="#E8C887" />
          <stop offset="100%" stopColor="#7A5A30" />
        </linearGradient>
        <radialGradient id="crystalShine" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#E8D4B0" />
          <stop offset="100%" stopColor="#8B6634" />
        </radialGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <rect width="600" height="600" fill={`url(#bg-${palette})`} />

      {/* soft warm spot */}
      <ellipse cx="300" cy="280" rx="260" ry="180" fill="#3A2A1A" opacity="0.35" />

      {children}
    </svg>
  )
}

// ────────────────────────────────────────────────────────────────
// 1. Vivid Aura — gold ear cuff with crystal
// ────────────────────────────────────────────────────────────────
function EarCuff() {
  return (
    <Stage palette="midnight">
      <g transform="translate(300 300)">
        {/* shadow under */}
        <ellipse cx="0" cy="120" rx="120" ry="14" fill="#000" opacity="0.55" filter="url(#softShadow)" />
        {/* main cuff band */}
        <path
          d="M -110 20 Q -110 -100 0 -110 Q 110 -100 110 20 L 90 25 Q 90 -80 0 -88 Q -90 -80 -90 25 Z"
          fill="url(#goldShine)"
          stroke="#5A4220"
          strokeWidth="1.2"
        />
        {/* inner highlight */}
        <path
          d="M -88 18 Q -88 -78 0 -86 Q 88 -78 88 18"
          fill="none"
          stroke="#FFF3D6"
          strokeWidth="1.4"
          opacity="0.55"
        />
        {/* crystal cluster */}
        <g transform="translate(0 -50)">
          <polygon points="0,-22 14,0 0,22 -14,0" fill="url(#crystalShine)" stroke="#5A4220" strokeWidth="0.6" />
          <polygon points="-22,-10 0,0 -10,18" fill="#E8D4B0" opacity="0.85" />
          <polygon points="22,-10 0,0 10,18" fill="#C49C5E" opacity="0.7" />
          <circle cx="-4" cy="-6" r="2" fill="#FFF" opacity="0.9" />
        </g>
        {/* end cap details */}
        <circle cx="-110" cy="20" r="9" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.8" />
        <circle cx="110" cy="20" r="9" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.8" />
        {/* tiny gem accents along band */}
        <circle cx="-55" cy="-65" r="4" fill="url(#crystalShine)" />
        <circle cx="55" cy="-65" r="4" fill="url(#crystalShine)" />
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 2. Majestic Flora — multicolor floral crystal necklace
// ────────────────────────────────────────────────────────────────
function FloralNecklace() {
  const petals = (cx, cy, r, color) => (
    <g>
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const rad = (a * Math.PI) / 180
        const x = cx + Math.cos(rad) * r * 0.55
        const y = cy + Math.sin(rad) * r * 0.55
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="11"
            ry="7"
            transform={`rotate(${a} ${x} ${y})`}
            fill={color}
            opacity="0.95"
            stroke="#5A4220"
            strokeWidth="0.4"
          />
        )
      })}
      <circle cx={cx} cy={cy} r="6" fill="#F4E1B0" stroke="#5A4220" strokeWidth="0.4" />
    </g>
  )
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* chain */}
        <path
          d="M -160 60 Q -160 -120 0 -160 Q 160 -120 160 60"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2.2"
          opacity="0.9"
        />
        <path
          d="M -160 60 Q -160 -120 0 -160 Q 160 -120 160 60"
          fill="none"
          stroke="#FFF3D6"
          strokeWidth="0.6"
          opacity="0.6"
        />
        {/* central flower */}
        {petals(0, 30, 50, '#E8C887')}
        {/* side flowers */}
        {petals(-95, -30, 32, '#D8A89A')}
        {petals(95, -30, 32, '#B6D1A0')}
        {/* leaves */}
        <ellipse cx="-50" cy="20" rx="14" ry="6" transform="rotate(-30 -50 20)" fill="#7A8A5A" opacity="0.9" />
        <ellipse cx="50" cy="20" rx="14" ry="6" transform="rotate(30 50 20)" fill="#7A8A5A" opacity="0.9" />
        {/* small stones */}
        <circle cx="-30" cy="-20" r="3" fill="#F4E1B0" />
        <circle cx="30" cy="-20" r="3" fill="#F4E1B0" />
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 3. Golden Sphere Huggies — chunky gold dome
// ────────────────────────────────────────────────────────────────
function SphereHuggies() {
  const Hoop = (cx, cy) => (
    <g transform={`translate(${cx} ${cy})`}>
      <ellipse cx="0" cy="20" rx="55" ry="8" fill="#000" opacity="0.55" filter="url(#softShadow)" />
      <path
        d="M -55 0 A 55 70 0 1 1 55 0 L 42 0 A 42 55 0 1 0 -42 0 Z"
        fill="url(#goldShine)"
        stroke="#5A4220"
        strokeWidth="1.2"
      />
      <path
        d="M -50 -8 Q 0 -68 50 -8"
        fill="none"
        stroke="#FFF3D6"
        strokeWidth="1.6"
        opacity="0.6"
      />
      <circle cx="-20" cy="-30" r="5" fill="#FFF3D6" opacity="0.8" />
      <circle cx="40" cy="0" r="4" fill="#7A5A30" />
    </g>
  )
  return (
    <Stage palette="midnight">
      <g transform="translate(300 300)">
        {Hoop(-90, 0)}
        {Hoop(90, 0)}
        <g transform="translate(0 30)" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="20" fill="#F4E1B0" opacity="0.0" textAnchor="middle">
          <text>14mm</text>
        </g>
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 4. Amber Lace — textured filigree drop earring
// ────────────────────────────────────────────────────────────────
function FiligreeDrop() {
  return (
    <Stage palette="sand">
      <g transform="translate(300 300)">
        {[-90, 90].map((x, i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <ellipse cx="0" cy="120" rx="35" ry="6" fill="#000" opacity="0.5" filter="url(#softShadow)" />
            {/* hook */}
            <path d="M 0 -120 Q 0 -150 30 -150" fill="none" stroke="url(#goldLine)" strokeWidth="3" />
            {/* top connector */}
            <circle cx="0" cy="-110" r="6" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
            {/* main filigree body */}
            <g transform="translate(0 -20)">
              <ellipse cx="0" cy="0" rx="38" ry="48" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.8" />
              {/* filigree pattern */}
              {Array.from({ length: 6 }).map((_, k) => (
                <ellipse
                  key={k}
                  cx="0"
                  cy="0"
                  rx={10 + k * 5}
                  ry={14 + k * 6}
                  fill="none"
                  stroke="#7A5A30"
                  strokeWidth="0.6"
                  opacity="0.7"
                />
              ))}
              {Array.from({ length: 8 }).map((_, k) => {
                const a = (k * Math.PI * 2) / 8
                const x = Math.cos(a) * 26
                const y = Math.sin(a) * 36
                return <circle key={k} cx={x} cy={y} r="2.4" fill="#5A4220" opacity="0.65" />
              })}
              <circle cx="0" cy="0" r="5" fill="#F4E1B0" />
            </g>
            {/* drop pearl */}
            <circle cx="0" cy="55" r="9" fill="#F4E1B0" stroke="#7A5A30" strokeWidth="0.5" />
            <circle cx="-3" cy="52" r="2" fill="#FFF" opacity="0.8" />
          </g>
        ))}
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 5. Royal Heirloom Set — gift box composition
// ────────────────────────────────────────────────────────────────
function GiftSet() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 320)">
        {/* box */}
        <rect x="-160" y="-40" width="320" height="140" rx="6" fill="#0A0604" stroke="#5A4220" strokeWidth="1" />
        <rect x="-160" y="-40" width="320" height="32" fill="#1A1108" stroke="#5A4220" strokeWidth="0.6" />
        <text x="0" y="-20" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="14" fill="#C49C5E" letterSpacing="3">VELMORA</text>
        {/* ribbon */}
        <rect x="-4" y="-40" width="8" height="140" fill="#5A4220" />
        <rect x="-160" y="20" width="320" height="6" fill="#5A4220" />
        {/* ribbon bow */}
        <g transform="translate(0 -40)">
          <path d="M -30 0 Q -10 -18 0 -8 Q 10 -18 30 0 Q 10 8 0 -2 Q -10 8 -30 0 Z" fill="#7A5A30" />
          <circle cx="0" cy="-4" r="4" fill="#5A4220" />
        </g>
        {/* inset jewelry suggestion: small huggies peeking */}
        <g transform="translate(-90 60)">
          <ellipse cx="0" cy="10" rx="22" ry="5" fill="url(#goldShine)" />
          <path d="M -22 0 A 22 28 0 1 1 22 0 L 16 0 A 16 22 0 1 0 -16 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
        </g>
        <g transform="translate(90 60)">
          <ellipse cx="0" cy="10" rx="22" ry="5" fill="url(#goldShine)" />
          <path d="M -22 0 A 22 28 0 1 1 22 0 L 16 0 A 16 22 0 1 0 -16 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
        </g>
        <g transform="translate(0 50)">
          <path d="M -40 8 Q -40 -18 0 -22 Q 40 -18 40 8" fill="none" stroke="url(#goldLine)" strokeWidth="2" />
          <circle cx="0" cy="2" r="4" fill="url(#crystalShine)" />
        </g>
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 6. Opal Pearl Huggies
// ────────────────────────────────────────────────────────────────
function PearlHuggies() {
  return (
    <Stage palette="midnight">
      <g transform="translate(300 300)">
        {[-90, 90].map((x, i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <ellipse cx="0" cy="20" rx="50" ry="6" fill="#000" opacity="0.5" filter="url(#softShadow)" />
            <path
              d="M -50 0 A 50 64 0 1 1 50 0 L 38 0 A 38 50 0 1 0 -38 0 Z"
              fill="url(#goldShine)"
              stroke="#5A4220"
              strokeWidth="1"
            />
            {Array.from({ length: 16 }).map((_, k) => {
              const a = Math.PI + (k / 15) * Math.PI
              const cx = Math.cos(a) * 44
              const cy = Math.sin(a) * 56
              return <circle key={k} cx={cx} cy={cy} r="2.4" fill="url(#crystalShine)" />
            })}
            {/* hanging pearl */}
            <circle cx="0" cy="50" r="10" fill="#F4E1B0" stroke="#7A5A30" strokeWidth="0.5" />
            <circle cx="-3" cy="47" r="2.5" fill="#FFF" opacity="0.85" />
          </g>
        ))}
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 7. Solstice Pendant — half moon
// ────────────────────────────────────────────────────────────────
function MoonPendant() {
  return (
    <Stage palette="sand">
      <g transform="translate(300 300)">
        {/* chain */}
        <path
          d="M -150 -10 L -90 -10"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2"
        />
        <path
          d="M 90 -10 L 150 -10"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2"
        />
        {Array.from({ length: 10 }).map((_, k) => {
          const t = k / 9
          const x = -90 + t * 180
          const y = -10 - Math.sin(t * Math.PI) * 90
          return <circle key={k} cx={x} cy={y} r="3.4" fill="url(#goldShine)" />
        })}
        {/* pendant */}
        <g transform="translate(0 70)">
          <ellipse cx="0" cy="50" rx="40" ry="6" fill="#000" opacity="0.55" filter="url(#softShadow)" />
          <path
            d="M 0 -30 A 36 50 0 1 0 0 70 A 26 30 0 1 1 0 -30 Z"
            fill="url(#goldShine)"
            stroke="#5A4220"
            strokeWidth="1"
          />
          <path
            d="M -4 -26 A 32 46 0 0 0 -4 66"
            fill="none"
            stroke="#FFF3D6"
            strokeWidth="1.4"
            opacity="0.55"
          />
          <circle cx="-12" cy="0" r="3" fill="#F4E1B0" />
        </g>
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// 8. Crescent Hoops
// ────────────────────────────────────────────────────────────────
function CrescentHoops() {
  return (
    <Stage palette="midnight">
      <g transform="translate(300 300)">
        {[-95, 95].map((x, i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <ellipse cx="0" cy="100" rx="28" ry="5" fill="#000" opacity="0.55" filter="url(#softShadow)" />
            <path
              d="M 0 -90 Q 50 -50 50 0 Q 50 60 0 90 Q -8 60 -8 0 Q -8 -50 0 -90 Z"
              fill="url(#goldShine)"
              stroke="#5A4220"
              strokeWidth="0.8"
            />
            <path d="M 0 -85 Q 44 -48 44 0" fill="none" stroke="#FFF3D6" strokeWidth="1.4" opacity="0.55" />
            <path d="M -3 -75 Q -3 -45 -3 0" fill="none" stroke="#7A5A30" strokeWidth="1" opacity="0.7" />
            {/* post */}
            <rect x="-2" y="-95" width="4" height="10" fill="#9A7340" />
            <circle cx="0" cy="-100" r="4" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.5" />
          </g>
        ))}
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// Lifestyle / UGC reel illustrations (vertical 9:16)
// ────────────────────────────────────────────────────────────────
function ReelEar() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 320)">
        {/* silhouette of a jaw/ear */}
        <path
          d="M -120 120 Q -150 40 -120 -40 Q -90 -120 -30 -150 Q 30 -160 60 -130 Q 90 -90 90 -30 Q 90 30 70 80 Q 60 130 30 170 L -120 170 Z"
          fill="#1A0E0A"
          stroke="#3A1F18"
          strokeWidth="1"
        />
        {/* ear cuff on the lobe */}
        <g transform="translate(0 -20)">
          <ellipse cx="0" cy="40" rx="40" ry="6" fill="#000" opacity="0.5" filter="url(#softShadow)" />
          <path d="M -40 0 A 40 30 0 1 1 40 0 L 30 0 A 30 22 0 1 0 -30 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.8" />
          <circle cx="0" cy="-12" r="4" fill="url(#crystalShine)" />
        </g>
        {/* hair sweep */}
        <path d="M -200 -180 Q -100 -240 50 -200 Q -20 -180 -200 -100 Z" fill="#0A0604" opacity="0.85" />
      </g>
    </Stage>
  )
}

function ReelNeck() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* shoulders */}
        <path d="M -240 280 Q -200 80 0 60 Q 200 80 240 280 Z" fill="#1F1108" />
        {/* neck */}
        <path d="M -60 60 L -60 -40 L 60 -40 L 60 60 Z" fill="#E0B98C" />
        <path d="M -60 60 L -60 -40 L 60 -40 L 60 60 Z" fill="url(#goldLine)" opacity="0.05" />
        {/* necklace */}
        <path d="M -60 0 Q 0 60 60 0" fill="none" stroke="url(#goldLine)" strokeWidth="2.2" />
        <path d="M -60 0 Q 0 60 60 0" fill="none" stroke="#FFF3D6" strokeWidth="0.6" opacity="0.5" />
        {/* pendant */}
        <g transform="translate(0 50)">
          <circle cx="0" cy="0" r="10" fill="url(#crystalShine)" stroke="#5A4220" strokeWidth="0.6" />
          <circle cx="-3" cy="-3" r="3" fill="#FFF" opacity="0.9" />
        </g>
      </g>
    </Stage>
  )
}

function ReelSet() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* head silhouette */}
        <ellipse cx="0" cy="-40" rx="90" ry="120" fill="#1A0E0A" />
        {/* jaw */}
        <path d="M -80 40 Q 0 120 80 40" fill="#1A0E0A" />
        {/* neck + shoulder */}
        <rect x="-50" y="60" width="100" height="60" fill="#E0B98C" />
        <path d="M -200 200 Q -100 100 0 100 Q 100 100 200 200 Z" fill="#1A0E0A" />
        {/* earrings */}
        {[-55, 55].map((x) => (
          <g key={x} transform={`translate(${x} 30)`}>
            <path d="M 0 0 A 18 22 0 1 1 0 0.1 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
            <circle cx="0" cy="22" r="6" fill="#F4E1B0" />
          </g>
        ))}
        {/* necklace */}
        <path d="M -50 90 Q 0 130 50 90" fill="none" stroke="url(#goldLine)" strokeWidth="2" />
        <circle cx="0" cy="118" r="5" fill="url(#crystalShine)" />
      </g>
    </Stage>
  )
}

function ReelCuff() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* hand silhouette */}
        <path d="M -120 180 Q -150 100 -140 0 Q -120 -120 -60 -160 Q 0 -180 30 -150 Q 40 -100 30 -50 Q 60 -40 80 0 Q 100 60 80 120 Q 60 180 0 200 Z" fill="#2A1A12" />
        {/* ear cuff on a finger/thumb position */}
        <g transform="translate(40 -60)">
          <ellipse cx="0" cy="40" rx="40" ry="6" fill="#000" opacity="0.6" filter="url(#softShadow)" />
          <path d="M -45 0 A 45 55 0 1 1 45 0 L 33 0 A 33 42 0 1 0 -33 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.8" />
          <circle cx="0" cy="-15" r="5" fill="url(#crystalShine)" />
        </g>
      </g>
    </Stage>
  )
}

function ReelPearl() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* ear silhouette */}
        <path d="M -60 -120 Q 20 -140 60 -80 Q 90 -20 60 60 Q 30 120 -20 120 Q -60 100 -60 60 Z" fill="#2A1A12" />
        {/* huggie */}
        <g transform="translate(20 30)">
          <path d="M -28 0 A 28 36 0 1 1 28 0 L 20 0 A 20 28 0 1 0 -20 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
          {Array.from({ length: 10 }).map((_, k) => {
            const a = Math.PI + (k / 9) * Math.PI
            const cx = Math.cos(a) * 24
            const cy = Math.sin(a) * 32
            return <circle key={k} cx={cx} cy={cy} r="1.6" fill="url(#crystalShine)" />
          })}
          <circle cx="0" cy="32" r="7" fill="#F4E1B0" stroke="#7A5A30" strokeWidth="0.4" />
        </g>
      </g>
    </Stage>
  )
}

function ReelDaily() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* ring dish */}
        <ellipse cx="0" cy="60" rx="180" ry="40" fill="#0A0604" />
        <ellipse cx="0" cy="50" rx="180" ry="40" fill="#1A0E0A" />
        <ellipse cx="0" cy="50" rx="180" ry="40" fill="none" stroke="#5A4220" strokeWidth="1" />
        {/* rings */}
        <g transform="translate(-80 20)">
          <ellipse cx="0" cy="35" rx="22" ry="5" fill="#000" opacity="0.5" filter="url(#softShadow)" />
          <ellipse cx="0" cy="0" rx="22" ry="28" fill="none" stroke="url(#goldLine)" strokeWidth="4" />
        </g>
        <g transform="translate(-20 10)">
          <ellipse cx="0" cy="38" rx="26" ry="6" fill="#000" opacity="0.5" filter="url(#softShadow)" />
          <ellipse cx="0" cy="0" rx="26" ry="32" fill="none" stroke="url(#goldLine)" strokeWidth="4" />
        </g>
        <g transform="translate(50 18)">
          <ellipse cx="0" cy="35" rx="22" ry="5" fill="#000" opacity="0.5" filter="url(#softShadow)" />
          <ellipse cx="0" cy="0" rx="22" ry="28" fill="none" stroke="url(#goldLine)" strokeWidth="4" />
        </g>
        <g transform="translate(110 28)">
          <ellipse cx="0" cy="30" rx="16" ry="4" fill="#000" opacity="0.5" filter="url(#softShadow)" />
          <ellipse cx="0" cy="0" rx="16" ry="22" fill="none" stroke="url(#goldLine)" strokeWidth="3" />
        </g>
      </g>
    </Stage>
  )
}

// ────────────────────────────────────────────────────────────────
// Lifestyle / category hero illustrations
// ────────────────────────────────────────────────────────────────
function HeroModel() {
  return (
    <Stage palette="midnight">
      <g transform="translate(300 300)">
        {/* warm light bloom */}
        <circle cx="-80" cy="-100" r="180" fill="#3A2A1A" opacity="0.45" />
        {/* shoulders */}
        <path d="M -260 320 Q -200 100 0 80 Q 200 100 260 320 Z" fill="#1A0E08" />
        {/* neck */}
        <rect x="-55" y="60" width="110" height="70" fill="#D9A98C" />
        {/* head/face */}
        <ellipse cx="0" cy="-60" rx="120" ry="160" fill="#D9A98C" />
        {/* hair sweep */}
        <path d="M -130 -160 Q -40 -240 80 -200 Q 130 -120 100 -40 Q 60 -90 -20 -110 Q -100 -100 -130 -40 Z" fill="#0A0604" />
        <path d="M -120 80 Q -180 40 -180 -20 Q -160 -100 -100 -120" fill="none" stroke="#0A0604" strokeWidth="14" />
        {/* earrings — large statement hoops */}
        {[-78, 78].map((x, i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <ellipse cx="0" cy="120" rx="32" ry="6" fill="#000" opacity="0.5" filter="url(#softShadow)" />
            <path d="M -32 0 A 32 50 0 1 1 32 0 L 22 0 A 22 38 0 1 0 -22 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
            <path d="M -28 -10 Q 0 -50 28 -10" fill="none" stroke="#FFF3D6" strokeWidth="1.2" opacity="0.6" />
            <circle cx="0" cy="40" r="5" fill="url(#crystalShine)" />
          </g>
        ))}
        {/* necklace */}
        <path d="M -55 90 Q 0 130 55 90" fill="none" stroke="url(#goldLine)" strokeWidth="2" />
        <circle cx="0" cy="118" r="5" fill="url(#crystalShine)" />
      </g>
    </Stage>
  )
}

function CategoryEarrings() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {[-100, 100].map((x, i) => (
          <g key={i} transform={`translate(${x} 0)`}>
            <ellipse cx="0" cy="150" rx="40" ry="6" fill="#000" opacity="0.5" filter="url(#softShadow)" />
            {/* hook */}
            <path d="M 0 -130 Q 20 -150 40 -130" fill="none" stroke="url(#goldLine)" strokeWidth="2.5" />
            {/* long filigree drop */}
            <g transform="translate(0 -50)">
              <ellipse cx="0" cy="0" rx="28" ry="40" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="0.6" />
              {Array.from({ length: 5 }).map((_, k) => (
                <ellipse key={k} cx="0" cy="0" rx={6 + k * 4} ry={10 + k * 5} fill="none" stroke="#7A5A30" strokeWidth="0.5" opacity="0.6" />
              ))}
              <circle cx="0" cy="0" r="4" fill="#F4E1B0" />
            </g>
            <circle cx="0" cy="60" r="9" fill="#F4E1B0" stroke="#7A5A30" strokeWidth="0.4" />
          </g>
        ))}
      </g>
    </Stage>
  )
}

function CategoryNecklaces() {
  return (
    <Stage palette="midnight">
      <g transform="translate(300 300)">
        <path
          d="M -200 100 Q -200 -160 0 -180 Q 200 -160 200 100"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2.4"
        />
        <g transform="translate(0 40)">
          <ellipse cx="0" cy="60" rx="40" ry="8" fill="#000" opacity="0.6" filter="url(#softShadow)" />
          <path d="M 0 -50 A 50 65 0 1 0 0 50 A 30 40 0 1 1 0 -50 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="1" />
          <path d="M -4 -45 A 46 60 0 0 0 -4 45" fill="none" stroke="#FFF3D6" strokeWidth="1.4" opacity="0.5" />
        </g>
      </g>
    </Stage>
  )
}

function CategoryHuggies() {
  return (
    <Stage palette="sand">
      <g transform="translate(300 300)">
        {[-95, 95].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            <ellipse cx="0" cy="60" rx="55" ry="8" fill="#000" opacity="0.55" filter="url(#softShadow)" />
            <path d="M -55 0 A 55 70 0 1 1 55 0 L 42 0 A 42 55 0 1 0 -42 0 Z" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="1" />
            {Array.from({ length: 18 }).map((_, k) => {
              const a = Math.PI + (k / 17) * Math.PI
              const cx = Math.cos(a) * 48
              const cy = Math.sin(a) * 62
              return <circle key={k} cx={cx} cy={cy} r="2.2" fill="url(#crystalShine)" />
            })}
          </g>
        ))}
      </g>
    </Stage>
  )
}

function BrandStory() {
  return (
    <Stage palette="velvet">
      <g transform="translate(300 300)">
        {/* hands cupping a piece */}
        <g transform="translate(-60 0)">
          <path d="M 0 80 Q -40 60 -40 0 Q -40 -60 0 -80 Q 40 -60 40 0 Q 40 60 0 80 Z" fill="#E0B98C" />
          <path d="M -20 70 Q -32 30 -28 -10" fill="none" stroke="#9A6B4A" strokeWidth="1" opacity="0.4" />
        </g>
        <g transform="translate(60 0)">
          <path d="M 0 80 Q -40 60 -40 0 Q -40 -60 0 -80 Q 40 -60 40 0 Q 40 60 0 80 Z" fill="#E0B98C" />
          <path d="M 20 70 Q 32 30 28 -10" fill="none" stroke="#9A6B4A" strokeWidth="1" opacity="0.4" />
        </g>
        {/* the piece */}
        <g transform="translate(0 -30)">
          <ellipse cx="0" cy="50" rx="60" ry="10" fill="#000" opacity="0.6" filter="url(#softShadow)" />
          <ellipse cx="0" cy="0" rx="60" ry="40" fill="url(#goldShine)" stroke="#5A4220" strokeWidth="1" />
          <path d="M -55 -10 Q 0 -38 55 -10" fill="none" stroke="#FFF3D6" strokeWidth="1.6" opacity="0.6" />
          <circle cx="0" cy="0" r="6" fill="url(#crystalShine)" />
        </g>
      </g>
    </Stage>
  )
}

const ART_MAP = {
  earCuff: EarCuff,
  floralNecklace: FloralNecklace,
  sphereHuggies: SphereHuggies,
  filigreeDrop: FiligreeDrop,
  giftSet: GiftSet,
  pearlHuggies: PearlHuggies,
  moonPendant: MoonPendant,
  crescentHoops: CrescentHoops,
  reelEar: ReelEar,
  reelNeck: ReelNeck,
  reelSet: ReelSet,
  reelCuff: ReelCuff,
  reelPearl: ReelPearl,
  reelDaily: ReelDaily,
  heroModel: HeroModel,
  categoryEarrings: CategoryEarrings,
  categoryNecklaces: CategoryNecklaces,
  categoryHuggies: CategoryHuggies,
  brandStory: BrandStory,
}

export default function ProductImage({ art, alt, className, imgClassName }) {
  const Comp = ART_MAP[art] || SphereHuggies
  return (
    <div className={cn('relative w-full h-full overflow-hidden bg-ink-900', className)}>
      <div className={cn('absolute inset-0', imgClassName)}>
        <Comp />
      </div>
      {alt ? <span className="sr-only">{alt}</span> : null}
    </div>
  )
}
