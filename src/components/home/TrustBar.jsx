import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 md:px-10">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 text-center md:justify-start"
          >
            <item.icon size={18} className="shrink-0 text-gold" />
            <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
