const motifs = {
  'vivid-aura-jewels': {
    background: 'from-velmora-cream via-velmora-champagne to-velmora-brown',
    accent: 'left-[18%] top-[30%] h-20 w-20 rounded-full border-[10px] border-velmora-gold rotate-12',
    second: 'right-[22%] top-[42%] h-16 w-16 rounded-full border-[8px] border-velmora-champagne -rotate-12',
    gem: 'left-[42%] top-[36%] h-7 w-7 rounded-full bg-velmora-cream/75 shadow-2xl',
  },
  'majestic-flora-nectar': {
    background: 'from-velmora-cream via-velmora-taupe to-velmora-ink',
    accent: 'left-[23%] top-[28%] h-24 w-24 rounded-full border-[9px] border-velmora-gold',
    second: 'right-[18%] top-[48%] h-14 w-28 rounded-full border-[8px] border-velmora-champagne rotate-45',
    gem: 'left-[50%] top-[42%] h-9 w-9 rounded-full bg-velmora-blush shadow-2xl',
  },
  'golden-sphere-huggies': {
    background: 'from-velmora-cream via-velmora-champagne to-velmora-ink',
    accent: 'left-[18%] top-[32%] h-24 w-24 rounded-full bg-gradient-to-br from-velmora-champagne to-velmora-gold shadow-2xl',
    second: 'right-[18%] top-[44%] h-20 w-20 rounded-full bg-gradient-to-br from-velmora-champagne to-velmora-gold shadow-2xl',
    gem: 'left-[45%] top-[28%] h-2 w-32 rounded-full bg-velmora-cream/35 blur-sm',
  },
  'amber-lace-earrings': {
    background: 'from-velmora-cream via-velmora-gold to-velmora-ink',
    accent: 'left-[18%] top-[24%] h-28 w-20 rounded-full border-[7px] border-velmora-gold rotate-[24deg]',
    second: 'right-[20%] top-[42%] h-28 w-20 rounded-full border-[7px] border-velmora-champagne -rotate-[18deg]',
    gem: 'left-[33%] top-[56%] h-24 w-24 rounded-full border border-velmora-cream/25',
  },
  'royal-heirloom-set': {
    background: 'from-velmora-cream via-velmora-taupe to-velmora-ink',
    accent: 'left-[18%] top-[28%] h-28 w-28 rounded-full border-[8px] border-velmora-gold',
    second: 'right-[16%] top-[38%] h-32 w-24 rounded-full border-[8px] border-velmora-champagne rotate-12',
    gem: 'left-[42%] top-[44%] h-10 w-10 rotate-45 bg-velmora-cream/70 shadow-2xl',
  },
}

const defaultMotif = motifs['golden-sphere-huggies']

export default function JewelryVisual({ product, label, className = '', variant = 'primary' }) {
  const motif = motifs[product?.id] || defaultMotif
  const isWorn = variant === 'worn'

  return (
    <div
      role="img"
      aria-label={label || product?.name || 'Velmora jewelry'}
      className={`relative overflow-hidden bg-gradient-to-br ${motif.background} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.48),transparent_24%),radial-gradient(circle_at_72%_70%,rgba(255,224,160,0.25),transparent_30%)]" />
      {isWorn && <div className="absolute inset-x-[28%] top-0 h-1/2 rounded-b-full bg-velmora-brown/35 blur-[1px]" />}
      <span className={`absolute ${motif.accent}`} />
      <span className={`absolute ${motif.second}`} />
      <span className={`absolute ${motif.gem}`} />
      <span className="absolute bottom-8 left-8 h-px w-24 bg-white/40" />
      <span className="absolute bottom-12 left-8 font-serif text-5xl text-white/18">V</span>
    </div>
  )
}
