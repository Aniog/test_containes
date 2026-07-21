import React from "react"
import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand/60 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-6 sm:px-8 md:grid-cols-4 md:gap-0">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2.5 md:justify-center ${
              i !== items.length - 1 ? "md:border-r md:border-sand/60" : ""
            }`}
          >
            <item.icon size={17} className="text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink sm:text-[11px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
