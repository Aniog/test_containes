import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 md:grid-cols-4 md:divide-x md:px-8">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2.5 py-4 md:py-5 ${
              i < 2 ? "border-b border-line md:border-b-0" : ""
            } ${i === 1 ? "border-l border-line md:border-l-0" : ""}`}
          >
            <item.icon className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink md:text-[11px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
