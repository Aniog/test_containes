import React from 'react'
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-warm-border bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto hide-scrollbar gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] font-medium tracking-wider uppercase text-taupe">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}