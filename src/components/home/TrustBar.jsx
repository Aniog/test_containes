import React from 'react'
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 py-3 md:py-4">
              <item.icon className="h-4 w-4 text-brand-gold" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest text-brand-text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}