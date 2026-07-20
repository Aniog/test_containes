import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-stone bg-velmora-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 sm:gap-10 md:justify-between lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-ink">
            <item.icon size={16} className="text-velmora-rust" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-widest sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
