import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-base text-surface">
      <div className="max-w-container mx-auto px-4 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-nav font-sans text-stone-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
