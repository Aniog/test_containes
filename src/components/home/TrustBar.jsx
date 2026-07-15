import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 py-5 px-3"
            >
              <Icon className="w-4 h-4 text-champagne shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-stone">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
