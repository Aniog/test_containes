import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-between">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-ink"
            >
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-[11px] font-medium uppercase tracking-widest md:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
