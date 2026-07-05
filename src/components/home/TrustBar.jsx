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
    <div className="bg-[var(--velmora-bg-secondary)] border-y border-[var(--velmora-border-light)]">
      <div className="velmora-container-wide px-4 md:px-8 lg:px-12 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2">
              <Icon className="w-4 h-4 text-[var(--velmora-accent)] flex-shrink-0" />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)] text-center">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
