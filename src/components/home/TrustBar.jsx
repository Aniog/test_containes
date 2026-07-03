import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 md:justify-between md:px-8">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 text-ink"
          >
            <item.icon size={16} className="text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[11px] uppercase tracking-[0.18em]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
