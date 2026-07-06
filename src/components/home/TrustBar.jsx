import { Truck, RefreshCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <div className="border-b border-sand bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-3 md:justify-between md:gap-8 md:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-taupe">
            <item.icon className="h-4 w-4 text-gold" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-extra-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
