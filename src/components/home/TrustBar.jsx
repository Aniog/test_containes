import { Truck, RotateCcw, CircleDot, Sparkles } from "lucide-react"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: CircleDot, label: "18K Gold Plated" },
  { icon: Sparkles, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <div className="border-b border-divider bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-6 px-4 py-3 sm:gap-10 md:justify-between lg:px-12">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-ink">
            <item.icon size={16} strokeWidth={1.5} className="text-champagne" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
