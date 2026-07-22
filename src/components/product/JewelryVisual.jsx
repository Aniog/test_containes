import { cn } from '@/lib/utils'

function CuffVisual() {
  return (
    <svg viewBox="0 0 400 500" className="relative z-10 h-full w-full text-velmora-gold" aria-hidden="true">
      <path d="M230 122c-70 18-112 82-96 149 14 57 63 91 120 80" className="fill-none stroke-current" strokeWidth="18" strokeLinecap="round" />
      <path d="M230 168c-44 17-69 56-59 96 8 33 36 54 71 54" className="fill-none stroke-current opacity-75" strokeWidth="10" strokeLinecap="round" />
      <circle cx="257" cy="132" r="15" className="fill-velmora-ivory stroke-current" strokeWidth="5" />
      <circle cx="260" cy="132" r="5" className="fill-current" />
    </svg>
  )
}

function NecklaceVisual() {
  return (
    <svg viewBox="0 0 400 500" className="relative z-10 h-full w-full text-velmora-gold" aria-hidden="true">
      <path d="M82 112c35 92 78 139 118 139s83-47 118-139" className="fill-none stroke-current" strokeWidth="8" strokeLinecap="round" />
      <line x1="200" y1="251" x2="200" y2="294" className="stroke-current" strokeWidth="7" strokeLinecap="round" />
      <circle cx="200" cy="324" r="31" className="fill-velmora-ivory stroke-current" strokeWidth="7" />
      <circle cx="181" cy="319" r="12" className="fill-velmora-gold/70" />
      <circle cx="217" cy="319" r="12" className="fill-velmora-burnished/70" />
      <circle cx="200" cy="342" r="12" className="fill-velmora-ivory stroke-current" strokeWidth="4" />
    </svg>
  )
}

function HoopsVisual() {
  return (
    <svg viewBox="0 0 400 500" className="relative z-10 h-full w-full text-velmora-gold" aria-hidden="true">
      <circle cx="154" cy="252" r="62" className="fill-none stroke-current" strokeWidth="18" />
      <circle cx="246" cy="252" r="62" className="fill-none stroke-current" strokeWidth="18" />
      <path d="M136 190c14-14 51-14 65 0M228 190c14-14 51-14 65 0" className="fill-none stroke-velmora-ivory/80" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

function EarringsVisual() {
  return (
    <svg viewBox="0 0 400 500" className="relative z-10 h-full w-full text-velmora-gold" aria-hidden="true">
      <circle cx="160" cy="157" r="17" className="fill-current" />
      <circle cx="240" cy="157" r="17" className="fill-current" />
      <path d="M160 185c-33 46-35 96 0 142 35-46 33-96 0-142ZM240 185c-33 46-35 96 0 142 35-46 33-96 0-142Z" className="fill-current opacity-95" />
      <path d="M143 238h34M223 238h34" className="stroke-velmora-ivory/70" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function SetVisual() {
  return (
    <svg viewBox="0 0 400 500" className="relative z-10 h-full w-full text-velmora-gold" aria-hidden="true">
      <rect x="96" y="153" width="208" height="196" rx="18" className="fill-velmora-ivory/70 stroke-current" strokeWidth="7" />
      <path d="M96 211h208M200 153v196" className="stroke-current" strokeWidth="5" />
      <circle cx="158" cy="280" r="29" className="fill-none stroke-current" strokeWidth="8" />
      <circle cx="242" cy="280" r="29" className="fill-none stroke-current" strokeWidth="8" />
      <path d="M150 224c21 27 78 27 100 0" className="fill-none stroke-current" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

const variantStyles = {
  product: 'from-velmora-champagne via-velmora-ivory to-velmora-mist',
  styled: 'from-velmora-espresso via-velmora-cacao to-velmora-burnished',
  packaging: 'from-velmora-ivory via-velmora-champagne to-velmora-mist',
}

function VisualShape({ product, variant }) {
  if (variant === 'packaging' || product.category === 'Sets') return <SetVisual />
  if (product.category === 'Necklaces') return <NecklaceVisual />
  if (product.category === 'Huggies') return <HoopsVisual />
  if (product.id === 'vivid-aura-jewels') return <CuffVisual />
  return <EarringsVisual />
}

export default function JewelryVisual({ product, variant = 'product', label = 'Velmora jewelry', compact = false, className }) {
  const isDark = variant === 'styled'

  return (
    <div
      className={cn('relative h-full w-full overflow-hidden bg-gradient-to-br', variantStyles[variant] || variantStyles.product, className)}
      role="img"
      aria-label={`${product.name} ${label}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.48),transparent_38%)]" />
      <div className={cn('absolute inset-5 border', isDark ? 'border-velmora-gold/25' : 'border-velmora-burnished/20')} />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-velmora-gold/10 blur-2xl" />
      <VisualShape product={product} variant={variant} />
      {!compact && (
        <div className={cn('absolute inset-x-6 bottom-6 border-t pt-4', isDark ? 'border-velmora-ivory/20 text-velmora-ivory' : 'border-velmora-burnished/20 text-velmora-espresso')}>
          <p className="font-serif text-2xl leading-none">{product.category}</p>
          <p className={cn('mt-2 text-xs uppercase tracking-[0.24em]', isDark ? 'text-velmora-ivory/72' : 'text-velmora-cacao/70')}>{label}</p>
        </div>
      )}
    </div>
  )
}
