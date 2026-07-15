import React from 'react'
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream-200/50 border-y border-cream-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2">
              <item.icon size={15} className="text-gold-600" strokeWidth={1.5} />
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-slate-850/60 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
