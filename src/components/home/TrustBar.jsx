import React from "react"
import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-4 md:justify-between md:px-8">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-[0.18em] text-cream/85 md:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
