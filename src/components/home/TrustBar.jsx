import React from "react"
import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react"

const items = [
  { id: "ship", label: "Free Worldwide Shipping", icon: Truck },
  { id: "returns", label: "30-Day Returns", icon: RefreshCw },
  { id: "gold", label: "18K Gold Plated", icon: Sparkles },
  { id: "hypo", label: "Hypoallergenic", icon: ShieldCheck },
]

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-bone-50">
      <div className="mx-auto max-w-editorial px-6 py-5 md:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.28em] text-ink/75 sm:gap-x-12 md:justify-between md:gap-x-6">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <li key={item.id} className="flex items-center gap-3">
                <Icon className="h-3.5 w-3.5 text-champagne-700" strokeWidth={1.5} />
                <span className="whitespace-nowrap">{item.label}</span>
                {idx < items.length - 1 && (
                  <span className="hidden h-3 w-px bg-ink/15 md:ml-6 md:inline-block" aria-hidden />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
