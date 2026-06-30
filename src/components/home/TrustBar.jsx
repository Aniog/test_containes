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
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center py-3 md:py-4 px-4">
              <item.icon className="w-4 h-4 text-[#c9a96e] mr-2 flex-shrink-0" />
              <span className="text-xs md:text-sm text-[#1a1a1a] tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
