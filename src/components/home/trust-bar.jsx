import React from "react"
import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export const TrustBar = () => {
  return (
    <div className="border-b border-hairline bg-cream">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-6 px-6 py-4 md:justify-between md:gap-8 md:px-10 lg:px-16">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon className="h-4 w-4 text-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink md:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
