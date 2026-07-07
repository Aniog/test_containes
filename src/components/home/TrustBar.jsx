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
    <section className="border-y border-ink/10 bg-ink text-ivory">
      <div className="container-editorial grid grid-cols-2 gap-y-5 py-5 md:grid-cols-4 md:gap-0">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2.5 px-2 text-center ${
              i !== 0 ? "md:border-l md:border-ivory/15" : ""
            }`}
          >
            <item.icon className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} />
            <span className="font-sans text-[11px] uppercase tracking-widest text-ivory/85">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
