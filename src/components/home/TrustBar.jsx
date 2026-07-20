import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-2 divide-x divide-ink/10 px-5 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 px-3 py-5 text-center"
          >
            <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-widest2 text-ink md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
