import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide text-velmora-text-light">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
