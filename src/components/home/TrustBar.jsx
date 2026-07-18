import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react"

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row md:px-10">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex items-center gap-2.5 ${
              i > 0 ? "md:border-l md:border-cream/15 md:pl-8" : ""
            }`}
          >
            <Icon size={16} strokeWidth={1.5} className="text-champagne" />
            <span className="text-[11px] uppercase tracking-widest2 text-cream/85">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
