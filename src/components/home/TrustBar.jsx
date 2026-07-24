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
    <div className="bg-warm-black border-t border-warm-charcoal/50">
      <div className="max-w-content mx-auto px-6 md:px-8 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-cream/70">
            <Icon className="w-4 h-4 text-gold" />
            <span className="font-sans text-xs tracking-button uppercase">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
