import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-y-6 px-6 py-6 md:grid-cols-4 md:px-10">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 md:justify-center"
          >
            <Icon size={18} className="text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink md:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
