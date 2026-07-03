import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-warm-black text-white">
      <div className="container-wide py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-[11px] tracking-[0.1em] uppercase text-warm-sand">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
