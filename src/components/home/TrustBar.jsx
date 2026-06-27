import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-b border-sand bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-5 sm:grid-cols-4 sm:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-center"
          >
            <Icon size={16} strokeWidth={1.5} className="text-champagne" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/80 sm:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
