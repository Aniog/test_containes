import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-charcoal text-white py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-none">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <item.icon size={14} strokeWidth={1.5} className="text-velmora-gold-light" />
              <span className="font-sans text-[11px] tracking-wider uppercase text-white/80 whitespace-nowrap">
                {item.label}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-[1px] h-3 bg-white/20 ml-6 md:ml-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
