import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <div className="bg-charcoal text-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-3 md:py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 md:gap-2">
              <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-champagne" />
              <span className="text-[10px] md:text-[11px] tracking-[0.08em] md:tracking-[0.1em] uppercase font-medium text-stone-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
