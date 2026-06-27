import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-line bg-velmora-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-velmora-line px-5 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 px-3 py-5 text-center md:py-6"
          >
            <Icon size={16} className="shrink-0 text-velmora-gold" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[0.15em] text-velmora-ink md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
