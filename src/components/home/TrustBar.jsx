import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-warm border-y border-velmora-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 sm:py-5">
          {trusts.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 text-center">
              <item.icon size={16} className="text-velmora-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-xs sm:text-[13px] text-velmora-graphite font-sans tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
