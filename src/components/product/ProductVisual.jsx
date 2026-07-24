const surfaceStyles = {
  main: {
    background:
      'linear-gradient(145deg, rgb(var(--velmora-ivory)) 0%, rgb(var(--velmora-stone)) 52%, rgb(var(--velmora-cream)) 100%)',
  },
  alternate: {
    background:
      'linear-gradient(145deg, rgb(var(--velmora-noir) / 0.94) 0%, rgb(var(--velmora-ink) / 0.86) 58%, rgb(var(--velmora-stone) / 0.72) 100%)',
  },
  lifestyle: {
    background:
      'linear-gradient(160deg, rgb(var(--velmora-cream)) 0%, rgb(var(--velmora-stone)) 42%, rgb(var(--velmora-noir) / 0.16) 100%)',
  },
}

const overlayStyles = {
  main: {
    background:
      'radial-gradient(circle at 20% 18%, rgb(var(--velmora-gold) / 0.24), transparent 28%), radial-gradient(circle at 78% 76%, rgb(var(--velmora-noir) / 0.12), transparent 26%)',
  },
  alternate: {
    background:
      'radial-gradient(circle at 18% 18%, rgb(var(--velmora-gold) / 0.28), transparent 26%), radial-gradient(circle at 78% 74%, rgb(var(--velmora-cream) / 0.18), transparent 24%)',
  },
  lifestyle: {
    background:
      'radial-gradient(circle at 26% 18%, rgb(var(--velmora-gold) / 0.32), transparent 26%), radial-gradient(circle at 72% 80%, rgb(var(--velmora-noir) / 0.12), transparent 24%)',
  },
}

const frameLabel = {
  main: 'EDITORIAL STILL',
  alternate: 'DETAIL VIEW',
  lifestyle: 'STYLED MOMENT',
}

function getTransform(view) {
  if (view === 'alternate') return 'translate(10 2) scale(1.04)'
  if (view === 'lifestyle') return 'translate(0 16) scale(0.92)'
  return 'translate(0 0) scale(1)'
}

function GoldDefs({ token }) {
  return (
    <defs>
      <linearGradient id={`${token}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(var(--velmora-cream))" />
        <stop offset="38%" stopColor="rgb(var(--velmora-gold))" />
        <stop offset="100%" stopColor="rgb(var(--velmora-noir) / 0.88)" />
      </linearGradient>
      <linearGradient id={`${token}-soft`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgb(var(--velmora-cream) / 0.98)" />
        <stop offset="100%" stopColor="rgb(var(--velmora-gold) / 0.68)" />
      </linearGradient>
      <filter id={`${token}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="rgb(var(--velmora-noir) / 0.18)" />
      </filter>
    </defs>
  )
}

function EarCuff({ token }) {
  return (
    <g filter={`url(#${token}-shadow)`}>
      <path
        d="M202 88C245 110 260 163 239 217C224 256 193 286 149 291C115 294 89 274 87 246C85 220 101 201 130 191"
        fill="none"
        stroke={`url(#${token}-gold)`}
        strokeLinecap="round"
        strokeWidth="20"
      />
      <circle cx="204" cy="162" r="17" fill={`url(#${token}-soft)`} />
      <circle cx="204" cy="162" r="8" fill="rgb(var(--velmora-cream))" />
      <circle cx="204" cy="162" r="27" fill="none" stroke="rgb(var(--velmora-gold) / 0.25)" strokeWidth="2" />
    </g>
  )
}

function FloralNecklace({ token }) {
  return (
    <g filter={`url(#${token}-shadow)`}>
      <path
        d="M80 136C106 203 214 203 240 136"
        fill="none"
        stroke={`url(#${token}-soft)`}
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M98 142C124 191 196 191 222 142"
        fill="none"
        stroke={`url(#${token}-gold)`}
        strokeLinecap="round"
        strokeWidth="12"
      />
      <g transform="translate(160 218)">
        <circle r="16" fill={`url(#${token}-gold)`} />
        <circle cx="0" cy="-24" r="12" fill="rgb(var(--velmora-cream))" />
        <circle cx="22" cy="-6" r="12" fill="rgb(var(--velmora-cream))" />
        <circle cx="14" cy="20" r="12" fill="rgb(var(--velmora-cream))" />
        <circle cx="-14" cy="20" r="12" fill="rgb(var(--velmora-cream))" />
        <circle cx="-22" cy="-6" r="12" fill="rgb(var(--velmora-cream))" />
        <circle r="6" fill="rgb(var(--velmora-noir) / 0.25)" />
      </g>
    </g>
  )
}

function Huggies({ token }) {
  return (
    <g filter={`url(#${token}-shadow)`}>
      <circle cx="122" cy="216" r="58" fill="none" stroke={`url(#${token}-gold)`} strokeWidth="18" />
      <circle cx="198" cy="180" r="48" fill="none" stroke={`url(#${token}-gold)`} strokeWidth="16" />
      <path d="M86 214C86 176 114 150 152 150" fill="none" stroke="rgb(var(--velmora-cream) / 0.55)" strokeLinecap="round" strokeWidth="4" />
      <path d="M168 179C168 148 191 126 222 126" fill="none" stroke="rgb(var(--velmora-cream) / 0.48)" strokeLinecap="round" strokeWidth="4" />
    </g>
  )
}

function FiligreeDrops({ token }) {
  return (
    <g filter={`url(#${token}-shadow)`}>
      <g transform="translate(126 108)">
        <circle r="10" fill={`url(#${token}-gold)`} />
        <path d="M0 10V46" fill="none" stroke={`url(#${token}-soft)`} strokeWidth="4" strokeLinecap="round" />
        <ellipse cy="102" rx="36" ry="56" fill="none" stroke={`url(#${token}-gold)`} strokeWidth="8" />
        <path d="M-18 78C-8 90-6 111-18 126" fill="none" stroke="rgb(var(--velmora-cream) / 0.68)" strokeWidth="3" strokeLinecap="round" />
        <path d="M0 70C10 90 10 111 0 132" fill="none" stroke="rgb(var(--velmora-cream) / 0.68)" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 78C8 90 6 111 18 126" fill="none" stroke="rgb(var(--velmora-cream) / 0.68)" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(194 118) scale(0.88)">
        <circle r="10" fill={`url(#${token}-gold)`} />
        <path d="M0 10V46" fill="none" stroke={`url(#${token}-soft)`} strokeWidth="4" strokeLinecap="round" />
        <ellipse cy="102" rx="36" ry="56" fill="none" stroke={`url(#${token}-gold)`} strokeWidth="8" />
        <path d="M-18 78C-8 90-6 111-18 126" fill="none" stroke="rgb(var(--velmora-cream) / 0.6)" strokeWidth="3" strokeLinecap="round" />
        <path d="M0 70C10 90 10 111 0 132" fill="none" stroke="rgb(var(--velmora-cream) / 0.6)" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 78C8 90 6 111 18 126" fill="none" stroke="rgb(var(--velmora-cream) / 0.6)" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
  )
}

function GiftSet({ token }) {
  return (
    <g filter={`url(#${token}-shadow)`}>
      <rect x="92" y="82" width="136" height="198" rx="24" fill="rgb(var(--velmora-cream) / 0.22)" stroke="rgb(var(--velmora-line) / 0.95)" strokeWidth="3" />
      <path d="M160 82V280" fill="none" stroke="rgb(var(--velmora-line) / 0.9)" strokeWidth="3" />
      <path d="M92 176H228" fill="none" stroke="rgb(var(--velmora-line) / 0.9)" strokeWidth="3" />
      <path d="M108 120C128 168 192 168 212 120" fill="none" stroke={`url(#${token}-soft)`} strokeLinecap="round" strokeWidth="8" />
      <path d="M120 126C136 160 184 160 200 126" fill="none" stroke={`url(#${token}-gold)`} strokeLinecap="round" strokeWidth="10" />
      <circle cx="160" cy="178" r="12" fill={`url(#${token}-gold)`} />
      <circle cx="134" cy="224" r="10" fill="rgb(var(--velmora-cream))" />
      <circle cx="186" cy="224" r="10" fill="rgb(var(--velmora-cream))" />
      <path d="M134 224V250" fill="none" stroke={`url(#${token}-gold)`} strokeLinecap="round" strokeWidth="5" />
      <path d="M186 224V250" fill="none" stroke={`url(#${token}-gold)`} strokeLinecap="round" strokeWidth="5" />
    </g>
  )
}

function renderMotif(productId, token) {
  switch (productId) {
    case 'vivid-aura-jewels':
      return <EarCuff token={token} />
    case 'majestic-flora-nectar':
      return <FloralNecklace token={token} />
    case 'golden-sphere-huggies':
      return <Huggies token={token} />
    case 'amber-lace-earrings':
      return <FiligreeDrops token={token} />
    case 'royal-heirloom-set':
      return <GiftSet token={token} />
    default:
      return <Huggies token={token} />
  }
}

export default function ProductVisual({
  product,
  view = 'main',
  className = '',
  ariaLabel,
}) {
  const token = `${product.id}-${view}`

  return (
    <div
      role="img"
      aria-label={ariaLabel || product.shortName}
      className={`relative isolate h-full w-full overflow-hidden ${className}`}
      style={surfaceStyles[view] || surfaceStyles.main}
    >
      <div className="absolute inset-0" style={overlayStyles[view] || overlayStyles.main} />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-ink/45">
        <span>{product.category}</span>
        <span>{frameLabel[view] || frameLabel.main}</span>
      </div>
      <div className="absolute inset-x-7 bottom-7 rounded-full border border-white/45 bg-white/45 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-ink/65 backdrop-blur-sm">
        {product.material}
      </div>
      <svg viewBox="0 0 320 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <GoldDefs token={token} />
        <g transform={getTransform(view)}>{renderMotif(product.id, token)}</g>
      </svg>
    </div>
  )
}
