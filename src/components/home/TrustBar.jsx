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
    <div className="bg-charcoal py-4 md:py-5">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-wider text-stone-300">
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
