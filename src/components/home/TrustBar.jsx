import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-y-5 px-6 py-5 md:grid-cols-4 md:px-10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-center md:gap-3"
          >
            <Icon size={16} className="shrink-0 text-gold" />
            <span className="text-[10px] uppercase tracking-widest2 text-ink md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
