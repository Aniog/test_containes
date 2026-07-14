import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-ivory border-y border-brand-sand">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-center gap-6 md:gap-12 overflow-x-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <item.icon className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-sans font-medium text-brand-muted whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
