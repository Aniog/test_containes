import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-ivory border-y border-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-velmora-warm-gray/30">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 py-1">
              <item.icon size={16} className="text-velmora-gold flex-shrink-0" />
              <span className="text-xs font-sans font-medium tracking-wider text-velmora-charcoal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
