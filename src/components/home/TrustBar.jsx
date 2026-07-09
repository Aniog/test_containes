import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-ivory border-y border-border">
      <div className="px-6 md:px-12 lg:px-20 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-wider text-stone font-sans font-medium">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
