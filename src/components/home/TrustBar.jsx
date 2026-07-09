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
      <div className="container-velmora py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-2.5 text-center ${
                i !== 0 ? 'md:border-l md:border-cream/15' : ''
              }`}
            >
              <item.icon size={16} className="text-gold shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream/85">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
