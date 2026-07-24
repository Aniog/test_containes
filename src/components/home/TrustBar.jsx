import React from 'react'
import { Gem, Globe2, Leaf, RefreshCcw } from 'lucide-react'

const items = [
  { icon: Globe2, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-line/60 bg-coal" aria-label="Our promises">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line/50 px-5 md:grid-cols-4 md:divide-x md:px-10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 py-5 md:py-6"
          >
            <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="text-[10px] font-semibold uppercase tracking-widest2 text-sand md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
