import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-6 md:grid-cols-4 md:px-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-2.5 text-center"
          >
            <item.icon size={17} className="text-gold" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-wide2 text-ink-soft">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
