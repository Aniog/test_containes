import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-cream-50">
      <div className="container-editorial grid grid-cols-2 gap-y-6 py-6 md:grid-cols-4 md:gap-0">
        {items.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-3 px-4 ${
              i !== 0 ? "md:border-l md:border-ink/10" : ""
            }`}
          >
            <Icon className="h-4 w-4 text-gold-deep" strokeWidth={1.5} />
            <span className="font-sans text-[10px] uppercase tracking-widest text-ink md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
