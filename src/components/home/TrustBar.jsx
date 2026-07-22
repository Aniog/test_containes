import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 py-5 px-3 text-center"
            >
              <Icon size={16} className="text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-cocoa font-medium">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
