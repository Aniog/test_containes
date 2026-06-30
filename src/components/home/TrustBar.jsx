import { Truck, RotateCcw, Shield, Gem } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-border/20 bg-velmora-surface/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 text-center">
              <item.icon size={16} className="text-velmora-gold flex-shrink-0" />
              <span className="text-xs tracking-wider text-velmora-muted uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
