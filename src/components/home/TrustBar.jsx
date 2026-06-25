import React from 'react'
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 py-4 overflow-x-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.12em] font-medium text-taupe whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
