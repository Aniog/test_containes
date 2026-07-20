import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand/60 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand/60">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 py-5 px-3 text-center"
            >
              <Icon size={18} className="text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-ink">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
