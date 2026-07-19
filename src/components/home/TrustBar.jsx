import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-2 gap-y-5 px-5 py-5 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 text-center md:justify-center"
          >
            <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-wider text-ink-soft md:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
