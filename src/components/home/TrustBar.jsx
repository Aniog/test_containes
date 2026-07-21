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
    <div className="bg-warm-black border-t border-warm-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold" />
              <span className="font-sans text-[11px] md:text-xs tracking-wide uppercase text-text-light/80 font-light">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
