import React from "react"
import { Gem, Globe, RefreshCcw, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-foreground/80"
          >
            <Icon className="h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
