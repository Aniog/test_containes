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
    <div className="bg-charcoal text-cream/70">
      <div className="max-w-content mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-gold" />
            <span className="text-[11px] tracking-wider uppercase font-medium">
              {item.label}
            </span>
            {i < items.length - 1 && (
              <span className="hidden md:inline text-cream/20 ml-8">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
