import React from 'react'
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="hairline">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 md:py-6">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 text-center"
            >
              <Icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
              <span className="text-xs md:text-sm text-[#A0988E] tracking-wider uppercase font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}