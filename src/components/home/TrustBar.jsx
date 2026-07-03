import React from "react"
import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Trust promises"
      className="border-y border-sand-200 bg-ivory-50"
    >
      <div className="container-velmora">
        <ul className="grid grid-cols-2 divide-x divide-sand-200 sm:grid-cols-4 sm:divide-x">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 px-3 py-4 text-center sm:py-5"
            >
              <Icon
                className="h-4 w-4 shrink-0 text-champagne-400"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-stone-300">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
