import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-border bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 sm:gap-10 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-espresso">
            <item.icon size={16} className="text-velmora-gold" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
