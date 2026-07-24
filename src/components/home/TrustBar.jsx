import React from "react"
import { Truck, RotateCcw, Gem, Heart } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 py-4 md:py-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-primary"
            >
              <item.icon className="h-4 w-4 text-accent" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
