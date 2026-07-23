import React from 'react'
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

export default function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-warm-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold stroke-[1.5]" />
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-warm-cream/70">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
