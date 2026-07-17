import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-sand border-y border-velmora-rose/60">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs text-velmora-muted tracking-wide">
              <item.icon size={13} strokeWidth={1.5} className="text-velmora-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
