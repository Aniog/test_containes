import React from 'react'
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react'

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-border-light bg-white-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trusts.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5 border-r border-border-light last:border-r-0"
            >
              <item.icon size={16} className="text-gold shrink-0" />
              <span className="text-[11px] md:text-xs tracking-[0.05em] text-charcoal-light font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}