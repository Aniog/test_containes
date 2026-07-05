import { Truck, RotateCcw, Sparkles, Leaf } from "lucide-react"
import { TRUST_ITEMS } from "@/data/products"

const ICONS = [Truck, RotateCcw, Sparkles, Leaf]

export default function TrustBar() {
  return (
    <section
      className="bg-bone border-y border-line"
      aria-label="Our promises"
    >
      <div className="container-editorial">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-line">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = ICONS[i] || Sparkles
            return (
              <li key={item} className="py-4 lg:py-5 flex items-center justify-center gap-3 text-center">
                <Icon size={16} strokeWidth={1.4} className="text-gold flex-shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-[12px] uppercase tracking-eyebrow text-ink font-sans">
                  {item}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
