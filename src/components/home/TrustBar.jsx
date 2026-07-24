import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Sparkles, label: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-velmora-dark text-velmora-warmWhite border-b border-velmora-borderDark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-8">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-2 justify-center">
            <item.icon className="w-4 h-4 text-velmora-gold" />
            <span className="font-sans text-xs md:text-sm tracking-[0.05em] text-velmora-warmWhite/90">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
