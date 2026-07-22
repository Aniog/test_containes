import { Gem, Leaf, RotateCcw, Truck } from "lucide-react"

const ITEMS = [
  { Icon: Truck, label: "Free Worldwide Shipping" },
  { Icon: RotateCcw, label: "30-Day Returns" },
  { Icon: Gem, label: "18K Gold Plated" },
  { Icon: Leaf, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="container grid grid-cols-2 gap-y-4 py-5 md:grid-cols-4 md:py-6">
        {ITEMS.map(({ Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5">
            <Icon className="size-4 shrink-0 text-bronze" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
