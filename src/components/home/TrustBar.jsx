import React from 'react'
import { Truck, RefreshCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <div className="border-b border-cream-300 bg-cream-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-4 py-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-2">
            <item.icon size={16} className="text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[11px] font-medium uppercase tracking-wide text-espresso-900">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
