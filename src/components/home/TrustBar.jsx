import React from 'react'
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <div className="bg-velmora-espresso text-velmora-cream/90">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-8 md:gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3 justify-center py-1">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="font-sans text-xs md:text-sm tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
