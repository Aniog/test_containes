import React from 'react'
import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-espresso-bg text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-4 h-4 text-gold shrink-0" />
              <span className="text-[11px] md:text-xs tracking-[0.15em] uppercase text-cream/80 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
