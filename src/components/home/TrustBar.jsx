import React from 'react'
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream-100 py-4 border-y border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-espresso-800/70"
            >
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span>{item.text}</span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-cream-300 mx-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
