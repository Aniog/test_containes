import React from "react"
import { Truck, RotateCcw, Sparkles, Shield } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
]

const TrustBar = () => {
  return (
    <section
      aria-label="Promises"
      className="bg-cream/60 border-y border-hairline"
    >
      <div className="container-wrap py-5 sm:py-6">
        <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-8">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.18em] text-ink/80"
            >
              <Icon size={14} strokeWidth={1.5} className="text-gold-deep" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TrustBar
