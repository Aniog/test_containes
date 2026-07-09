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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 md:py-5">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs md:text-sm text-[var(--velmora-text-secondary)] tracking-wide"
            >
              <item.icon className="w-4 h-4 text-[var(--velmora-gold)]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
