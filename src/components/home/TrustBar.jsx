import React from "react"
import { Truck, RotateCcw, Shield, Heart } from "lucide-react"

const trustItems = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Shield, text: "18K Gold Plated" },
  { icon: Heart, text: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-surface border-b border-velmora-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 py-4 sm:py-5">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 sm:gap-3">
              <Icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-velmora-text-secondary whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
