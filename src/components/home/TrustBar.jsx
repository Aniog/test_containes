import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-gold/15 bg-espresso">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-6 py-6 md:grid-cols-4 md:px-10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-center md:justify-start"
          >
            <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-[0.18em] text-ivory-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
