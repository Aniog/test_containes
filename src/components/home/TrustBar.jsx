import { Gem, Leaf, RotateCcw, Truck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-8">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-2.5 py-5 text-center ${
              i > 0 ? 'md:border-l md:border-line' : ''
            }`}
          >
            <Icon className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
