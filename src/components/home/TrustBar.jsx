import React from 'react'
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: ShieldCheck, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-[hsl(var(--background-secondary))] border-y border-[hsl(var(--border))]">
      <div className="container-padding py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-[hsl(var(--foreground-secondary))]">
              <item.icon size={16} className="text-[hsl(var(--accent))]" />
              <span className="whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
