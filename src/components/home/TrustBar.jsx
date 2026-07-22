import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="py-4 border-y border-charcoal/8 bg-cream">
      <div className="container-narrow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-2 lg:py-1"
            >
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-caption uppercase tracking-wide text-warm-gray">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
