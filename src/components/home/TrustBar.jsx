import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-base text-velmora-cream py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
