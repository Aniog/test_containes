import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

export default function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-xs tracking-widest uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
