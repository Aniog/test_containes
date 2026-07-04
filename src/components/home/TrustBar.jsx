import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-divider bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {items.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.1em] text-muted">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
