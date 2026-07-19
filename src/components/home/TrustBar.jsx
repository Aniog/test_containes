import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-onyx-950 border-y border-onyx-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-onyx-800">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2.5 py-4 lg:py-5"
            >
              <item.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="font-sans text-xs tracking-wide text-velvet-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
