import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-charcoal text-cream-100 py-4 border-b border-charcoal-600">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="text-xs tracking-wider text-cream-200/80">
                {item.label}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block ml-6 md:ml-12 text-cream-400/30">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
