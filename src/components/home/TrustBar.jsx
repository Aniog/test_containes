import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-cream-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map(feature => (
            <div key={feature.label} className="flex items-center justify-center gap-2.5">
              <feature.icon size={16} className="text-gold-600 flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-wide text-charcoal-600 font-medium whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
