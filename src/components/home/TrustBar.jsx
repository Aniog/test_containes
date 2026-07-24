import { Truck, RefreshCcw, Gem, Heart } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <div className="border-y border-velmora-espresso/10 bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 md:justify-between md:gap-8 md:px-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-velmora-mocha"
          >
            <item.icon className="h-4 w-4 text-velmora-gold" />
            <span className="whitespace-nowrap font-sans text-[11px] uppercase tracking-label">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
