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
    <div className="bg-[var(--velmora-dark)] text-[var(--velmora-bg)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-[var(--velmora-accent)]" />
              <span className="text-xs tracking-wider-luxury uppercase">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
