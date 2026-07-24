import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-surfaceAlt border-b border-hairline">
      <div className="max-w-container mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span className="font-sans text-xs tracking-wide text-foregroundMuted uppercase">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
