import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-charcoal text-white py-3.5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-brand-gold" />
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-extra-wide text-white/90">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-white/20 ml-6">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
