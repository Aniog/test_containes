import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-velvet-200 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-center md:justify-between py-4 md:py-5 gap-y-3 gap-x-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-velvet-700">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs tracking-wider uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}