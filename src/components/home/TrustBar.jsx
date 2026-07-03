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
    <div className="bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs font-sans tracking-wide text-velmora-cream/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
