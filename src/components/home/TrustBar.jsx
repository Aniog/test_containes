import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <div className="border-b border-velmora-border bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 lg:gap-12">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-velmora-charcoal"
          >
            <item.icon className="h-4 w-4 text-velmora-gold" />
            <span className="text-xs uppercase tracking-[0.12em]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
