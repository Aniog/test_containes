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
    <div className="bg-primary text-primary-foreground py-4">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
