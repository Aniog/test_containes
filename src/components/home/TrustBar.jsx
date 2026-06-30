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
    <div className="bg-[var(--velmora-bg-alt)] border-y border-[var(--velmora-border-light)]">
      <div className="velmora-container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 py-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[var(--velmora-accent)]" />
              <span className="velmora-body-xs text-[var(--velmora-text-muted)] whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
