import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <section className="border-y border-brand-sand bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-sans font-medium text-brand-muted uppercase tracking-wider">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
