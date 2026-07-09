import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-border bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-16 py-4 overflow-x-auto hide-scrollbar">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 flex-shrink-0">
              <Icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest text-velmora-muted whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}