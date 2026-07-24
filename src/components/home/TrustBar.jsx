import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-cream border-y border-brand-divider-light">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 lg:gap-3"
            >
              <item.icon size={16} className="text-brand-gold flex-shrink-0" />
              <span className="text-[11px] sm:text-xs text-brand-charcoal tracking-wider uppercase font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
