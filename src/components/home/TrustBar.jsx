import React from 'react'
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-5 sm:py-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-body-sm text-warm-gray font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
