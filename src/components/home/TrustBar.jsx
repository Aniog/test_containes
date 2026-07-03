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
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center md:justify-start gap-2.5"
            >
              <Icon className="w-4 h-4 text-gold shrink-0" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-cream/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
