import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-b border-gold-muted bg-cream py-3.5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-ink">
            <item.icon size={14} className="text-gold-dark" strokeWidth={1.5} />
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.15em]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
