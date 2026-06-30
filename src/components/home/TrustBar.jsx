import React from 'react'
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-espresso-800 text-cream">
      <div className="container-editorial py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 text-center">
              <Icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream/90">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
