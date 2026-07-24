import React from 'react'

const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 md:justify-between">
        {ITEMS.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-widest2 text-ink">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
