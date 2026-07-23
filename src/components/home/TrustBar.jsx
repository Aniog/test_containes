import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Gem, label: '18K Gold Plated' },
    { icon: Shield, label: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-dark-gray border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="font-sans text-xs uppercase tracking-nav text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
