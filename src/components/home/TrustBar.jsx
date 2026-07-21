import React from 'react'
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-ivory border-y border-velmora-border/60">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-velmora-graphite">
              <item.icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="text-xs tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
