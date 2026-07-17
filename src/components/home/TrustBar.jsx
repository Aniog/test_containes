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
    <section className="bg-brand-ivory border-y border-brand-linen">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 py-1">
              <item.icon className="w-4 h-4 text-brand-gold" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-wider text-brand-taupe uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
