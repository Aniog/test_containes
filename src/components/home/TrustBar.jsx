import { Truck, RotateCcw, Gem, Leaf } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 py-4 md:py-5">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 md:gap-3"
            >
              <item.icon
                size={16}
                className="text-gold flex-shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.12em] font-sans text-espresso/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
