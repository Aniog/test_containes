import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-taupe/50 bg-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-velmora-stone"
            >
              <item.icon className="h-4 w-4 text-velmora-gold" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
