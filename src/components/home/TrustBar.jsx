import { Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react"

const items = [
  {
    id: "shipping",
    icon: Truck,
    label: "Free Worldwide Shipping",
  },
  {
    id: "returns",
    icon: RotateCcw,
    label: "30-Day Returns",
  },
  {
    id: "gold",
    icon: Sparkles,
    label: "18K Gold Plated",
  },
  {
    id: "skin",
    icon: ShieldCheck,
    label: "Hypoallergenic",
  },
]

export function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="border-y border-taupe-200 bg-ivory-50"
    >
      <div className="container-x">
        <ul className="flex flex-col divide-y divide-taupe-200 py-2 md:flex-row md:divide-x md:divide-y-0 md:py-0">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <li
                key={it.id}
                className="flex flex-1 items-center justify-center gap-3 py-4 md:py-5"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="text-gold-500"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-semibold uppercase tracking-wider2 text-ink-500">
                  {it.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
