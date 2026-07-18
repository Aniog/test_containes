import React from 'react'

const artworkStyles = {
  'vivid-aura-jewels': {
    gradient: 'from-velmora-cocoa via-velmora-espresso to-velmora-cocoa',
    shape: 'cuff',
    gem: 'bg-velmora-cream',
  },
  'majestic-flora-nectar': {
    gradient: 'from-velmora-mist via-velmora-cream to-velmora-linen',
    shape: 'necklace',
    gem: 'bg-velmora-rose',
  },
  'golden-sphere-huggies': {
    gradient: 'from-velmora-espresso via-velmora-cocoa to-velmora-espresso',
    shape: 'huggies',
    gem: 'bg-velmora-gold',
  },
  'amber-lace-earrings': {
    gradient: 'from-velmora-cocoa via-velmora-espresso to-velmora-cocoa',
    shape: 'drops',
    gem: 'bg-velmora-sand',
  },
  'royal-heirloom-set': {
    gradient: 'from-velmora-cream via-velmora-mist to-velmora-linen',
    shape: 'set',
    gem: 'bg-velmora-gold',
  },
}

function Huggies({ variant }) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-36 w-36 rounded-full border-[18px] border-velmora-gold shadow-[0_0_40px_rgba(185,139,69,0.32)] md:h-44 md:w-44" />
      <div className="absolute h-24 w-24 rounded-full border-[14px] border-velmora-sand/90 md:h-32 md:w-32" />
      <div className="absolute right-[28%] top-[28%] h-8 w-8 rounded-full bg-velmora-cream/80 blur-[1px]" />
      {variant === 'worn' && <div className="absolute left-[18%] top-[18%] h-44 w-28 rounded-full bg-velmora-cream/20 blur-xl" />}
    </div>
  )
}

function Necklace({ variant }) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute top-[18%] h-52 w-52 rounded-full border border-velmora-gold/70 md:h-64 md:w-64" />
      <div className="absolute top-[44%] flex h-24 w-24 items-center justify-center rounded-full border border-velmora-gold/60 bg-velmora-cream/70 shadow-soft">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="absolute h-8 w-4 rounded-full bg-velmora-rose/80" style={{ transform: `rotate(${index * 60}deg) translateY(-18px)` }} />
        ))}
        <span className="h-5 w-5 rounded-full bg-velmora-gold" />
      </div>
      {variant === 'detail' && <div className="absolute bottom-[18%] h-px w-44 bg-velmora-gold/60" />}
    </div>
  )
}

function Drops() {
  return (
    <div className="relative flex h-full items-center justify-center gap-10">
      {[0, 1].map((item) => (
        <div key={item} className="relative h-52 w-24">
          <div className="mx-auto h-10 w-10 rounded-full border-[10px] border-velmora-gold" />
          <div className="mx-auto mt-3 h-36 w-20 rounded-full border border-velmora-gold/80 bg-velmora-gold/15 shadow-soft">
            <div className="m-3 h-28 rounded-full border border-velmora-cream/35" />
          </div>
        </div>
      ))}
    </div>
  )
}

function Cuff() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="h-48 w-32 rotate-12 rounded-full border-[18px] border-velmora-gold shadow-[0_0_45px_rgba(185,139,69,0.35)] md:h-60 md:w-40" />
      <div className="absolute right-[34%] top-[34%] h-7 w-7 rounded-full bg-velmora-cream shadow-[0_0_24px_rgba(255,249,240,0.8)]" />
    </div>
  )
}

function GiftSet() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="h-60 w-60 border border-velmora-sand/70 bg-velmora-cream/80 p-8 shadow-editorial">
        <div className="h-full w-full border border-velmora-linen p-6">
          <div className="mx-auto h-20 w-20 rounded-full border-[10px] border-velmora-gold" />
          <div className="mx-auto mt-8 h-16 w-16 rounded-full border border-velmora-gold/70" />
        </div>
      </div>
    </div>
  )
}

export default function ProductArtwork({ product, variant = 'primary', className = '' }) {
  const style = artworkStyles[product.id] || artworkStyles['vivid-aura-jewels']

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,249,240,0.45),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(185,139,69,0.45),transparent_32%)]" />
      <div className="absolute inset-6 border border-velmora-cream/15" />
      {style.shape === 'huggies' && <Huggies variant={variant} />}
      {style.shape === 'necklace' && <Necklace variant={variant} />}
      {style.shape === 'drops' && <Drops />}
      {style.shape === 'cuff' && <Cuff />}
      {style.shape === 'set' && <GiftSet />}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-velmora-cream/20 pt-4 text-[0.62rem] font-bold uppercase tracking-luxe text-velmora-cream/80">
        <span>Velmora</span>
        <span>{variant}</span>
      </div>
    </div>
  )
}
