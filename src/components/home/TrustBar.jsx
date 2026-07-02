import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-ink text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between py-3 gap-4 md:gap-0">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold flex-shrink-0" />
              <span className="text-[10px] md:text-xs text-white/70 tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}