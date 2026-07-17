import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-sand md:grid-cols-4 md:px-8">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-2.5 px-4 py-5 text-center"
          >
            <item.icon size={18} className="shrink-0 text-gold" />
            <span className="text-[10px] uppercase tracking-widest2 text-ink md:text-[11px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
