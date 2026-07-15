import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <Icon className="w-4 h-4 text-champagne shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream/90">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
