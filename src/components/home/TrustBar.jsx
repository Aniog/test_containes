import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-sand/30 bg-velmora-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-4 md:gap-12 md:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon size={16} className="text-velmora-gold" strokeWidth={1.5} />
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-velmora-warm-gray">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
