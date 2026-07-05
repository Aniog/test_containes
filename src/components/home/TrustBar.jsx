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
    <div className="bg-stone-900 text-stone-300">
      <div className="max-w-container mx-auto px-5 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-nav font-medium text-stone-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
