import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-foreground text-background py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-sm">
              <item.icon size={16} className="text-primary" />
              <span className="tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
