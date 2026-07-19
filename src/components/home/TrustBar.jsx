import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/10">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 py-5 px-4 text-center"
            >
              <Icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ivory/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
