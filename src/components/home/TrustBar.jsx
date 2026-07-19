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
    <section className="border-y border-taupe-sand bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-center">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-taupe font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}