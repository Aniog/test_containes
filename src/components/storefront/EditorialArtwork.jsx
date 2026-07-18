import React from 'react'

const toneMap = {
  hero: 'from-velmora-espresso via-velmora-cocoa to-velmora-linen',
  ear: 'from-velmora-cocoa via-velmora-espresso to-velmora-cocoa',
  neck: 'from-velmora-mist via-velmora-cream to-velmora-linen',
  gift: 'from-velmora-espresso via-velmora-cocoa to-velmora-sand',
  soft: 'from-velmora-cream via-velmora-mist to-velmora-linen',
}

function GoldHoops({ compact = false }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((item) => (
        <span
          key={item}
          className={`${compact ? 'h-20 w-14 border-[10px]' : 'h-44 w-32 border-[18px]'} absolute rounded-full border-velmora-gold shadow-[0_0_38px_rgba(185,139,69,0.35)]`}
          style={{ transform: `translate(${(item - 1) * 34}px, ${(item % 2) * 18}px) rotate(${item * 15 - 12}deg)` }}
        />
      ))}
    </div>
  )
}

function GoldChain() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="h-52 w-52 rounded-full border border-velmora-gold/70" />
      <span className="absolute top-[58%] h-16 w-16 rounded-full border border-velmora-gold bg-velmora-cream/60 shadow-soft" />
      <span className="absolute top-[62%] h-5 w-5 rounded-full bg-velmora-rose" />
    </div>
  )
}

function GiftBox() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-48 w-48 border border-velmora-sand bg-velmora-cream/85 p-6 shadow-editorial">
        <div className="h-full w-full border border-velmora-linen">
          <span className="mx-auto mt-8 block h-16 w-16 rounded-full border-[10px] border-velmora-gold" />
          <span className="mx-auto mt-5 block h-px w-24 bg-velmora-gold/60" />
        </div>
      </div>
    </div>
  )
}

export default function EditorialArtwork({ variant = 'soft', label = 'Velmora', className = '' }) {
  const tone = toneMap[variant] || toneMap.soft
  const isDark = ['hero', 'ear', 'gift'].includes(variant)

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${tone} ${className}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_24%_20%,rgba(255,249,240,0.55),transparent_24%),radial-gradient(circle_at_76%_72%,rgba(185,139,69,0.48),transparent_30%)]" />
      <div className="absolute inset-5 border border-velmora-cream/20" />
      {variant === 'neck' && <GoldChain />}
      {variant === 'gift' && <GiftBox />}
      {variant !== 'neck' && variant !== 'gift' && <GoldHoops compact={variant !== 'hero'} />}
      <div className={`absolute bottom-5 left-5 right-5 flex items-center justify-between border-t pt-4 text-[0.62rem] font-bold uppercase tracking-luxe ${isDark ? 'border-velmora-cream/20 text-velmora-cream/80' : 'border-velmora-gold/30 text-velmora-cocoa'}`}>
        <span>{label}</span>
        <span>Fine Jewelry</span>
      </div>
    </div>
  )
}
