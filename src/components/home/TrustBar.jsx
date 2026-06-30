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
    <div className="bg-[#1a1a1a] text-white py-4">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs tracking-wider uppercase">
              <item.icon size={14} className="text-[#c9a96e]" />
              <span className="text-white/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
