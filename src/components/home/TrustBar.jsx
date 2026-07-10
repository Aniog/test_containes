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
    <div className="bg-base py-4 md:py-5">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-3 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-stone-300 justify-center">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
              <span className="text-[10px] md:text-xs tracking-widest uppercase font-sans font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
