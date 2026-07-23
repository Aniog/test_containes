import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-graphite border-y border-brand-divider/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-center"
            >
              <item.icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-xs sm:text-sm text-brand-cream/70 tracking-wider uppercase font-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
