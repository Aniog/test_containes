import React from 'react'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

export default function TrustBar() {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-[var(--velmora-dark)] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <feature.icon className="w-4 h-4 text-[var(--velmora-accent-light)]" />
              <span className="text-xs md:text-sm font-light tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
