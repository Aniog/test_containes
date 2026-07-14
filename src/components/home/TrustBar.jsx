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
    <div className="bg-charcoal text-white/80">
      <div className="container-wide py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustItems.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-gold-light" />
                <span className="text-xs tracking-wide font-sans">{item.label}</span>
              </div>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-white/20">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
