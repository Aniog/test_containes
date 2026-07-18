import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-espresso/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-espresso/10 px-6 md:grid-cols-4 md:px-10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 px-4 py-5 text-center"
          >
            <Icon size={18} className="text-gold" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-[0.18em] text-espresso">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
