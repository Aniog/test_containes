import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <div className="bg-deepCharcoal border-t border-divider/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="font-sans text-xs md:text-sm tracking-wide text-textLight/80 font-medium">
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
