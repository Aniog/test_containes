import React from "react"
import { Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react"

const TrustBar = () => {
  const items = [
    { icon: Truck, label: "Free Worldwide Shipping" },
    { icon: RotateCcw, label: "30-Day Returns" },
    { icon: ShieldCheck, label: "18K Gold Plated" },
    { icon: Sparkles, label: "Hypoallergenic" },
  ]

  return (
    <div className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 py-4">
              <item.icon className="h-4 w-4 text-amber-700" />
              <span className="text-xs uppercase tracking-[0.12em] text-stone-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
