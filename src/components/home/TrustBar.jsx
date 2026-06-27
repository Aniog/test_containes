import React from 'react'
import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-50 border-y border-velmora-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2">
              <item.icon className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="text-[11px] md:text-xs text-velmora-700 tracking-[0.04em] font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}