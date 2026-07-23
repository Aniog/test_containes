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
    <div className="bg-cream-100 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span className="font-sans text-xs tracking-wider text-stone-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
