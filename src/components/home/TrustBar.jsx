import { Truck, RotateCcw, Crown, ShieldCheck } from "lucide-react"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Crown, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-6 px-5 py-4 md:justify-between md:gap-8 md:px-8">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon size={16} className="text-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
