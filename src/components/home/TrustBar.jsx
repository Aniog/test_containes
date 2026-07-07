import * as React from "react"
import { Truck, RefreshCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-border bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-4 md:gap-12 md:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-espresso-light">
            <item.icon className="h-4 w-4 text-velmora-gold" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] md:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
