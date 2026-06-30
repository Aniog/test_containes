import React from 'react'
import { Globe, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Gem, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-around gap-3 md:gap-6 py-4 overflow-x-auto whitespace-nowrap">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 px-2 md:px-0 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span className="font-sans text-[11px] md:text-xs text-muted uppercase tracking-[0.05em]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
