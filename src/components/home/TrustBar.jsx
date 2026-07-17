import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-[var(--velmora-bg-alt)] border-y border-[var(--velmora-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 py-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-[var(--velmora-text-muted)]">
              <item.icon size={16} className="flex-shrink-0" />
              <span className="text-xs tracking-wider uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
