import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react"
import { TRUST_ITEMS } from "@/data/content"

const icons = {
  shipping: Truck,
  returns: RotateCcw,
  gold: Sparkles,
  hypo: ShieldCheck,
}

export default function TrustBar() {
  return (
    <section
      aria-label="Trust promises"
      className="bg-paper-warm border-y border-mist"
    >
      <div className="container-editorial">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-mist">
          {TRUST_ITEMS.map((item) => {
            const Icon = icons[item.id] || Sparkles
            return (
              <li
                key={item.id}
                className="flex items-center justify-center gap-3 py-4 md:py-5 px-2 text-center"
              >
                <Icon
                  size={16}
                  strokeWidth={1.25}
                  className="text-gold-deep flex-shrink-0"
                />
                <span className="text-[11px] md:text-xs uppercase tracking-eyebrow text-ink/85 font-medium">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
