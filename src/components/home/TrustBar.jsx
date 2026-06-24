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
    <div className="bg-brand-charcoal text-white/90">
      <div className="section-padding py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={16} className="text-brand-gold" />
              <span className="text-[11px] md:text-xs tracking-wide uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
