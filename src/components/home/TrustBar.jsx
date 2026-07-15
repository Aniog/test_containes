import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-espresso text-warm-300">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-wide font-sans whitespace-nowrap">{item.label}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-warm-600 ml-6">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
