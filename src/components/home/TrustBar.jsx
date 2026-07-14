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
    <div className="bg-charcoal text-cream/80">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold" />
              <span className="text-[11px] md:text-xs font-sans tracking-wide uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
