import React from 'react'
import { Truck, RotateCcw, Gem, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-truffle-200/30 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-center md:justify-between py-4 flex-wrap gap-4 md:gap-0">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs text-truffle-500 tracking-wide">
              <item.icon size={14} className="text-gold shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
