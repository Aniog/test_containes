import React from 'react'
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-sand bg-cream">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="grid grid-cols-2 divide-x divide-sand md:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 py-5 px-3 text-center md:py-6"
            >
              <Icon className="h-4 w-4 flex-shrink-0 text-gold" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.18em] text-ink-soft md:text-[11px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
