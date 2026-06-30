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
    <div className="bg-stone-900 text-cream/80 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-2">
        {trustItems.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="text-[11px] tracking-wider uppercase font-medium whitespace-nowrap">{label}</span>
            {i < trustItems.length - 1 && (
              <span className="hidden md:inline text-stone-700 ml-6 md:ml-10">·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
