import React from 'react'
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-cream-300 bg-cream-100/50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-10">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-espresso-800/80">
              <item.icon className="h-4 w-4 text-gold-600" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
