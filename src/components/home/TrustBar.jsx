import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <div className="bg-charcoal text-white/80">
      <div className="max-w-content mx-auto px-5 md:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] tracking-wide font-sans font-light">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
