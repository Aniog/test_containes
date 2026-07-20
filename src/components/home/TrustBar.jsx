import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-warm-border bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 scrollbar-hide">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2 text-xs md:text-sm text-muted-text whitespace-nowrap">
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
                <span className="tracking-wider uppercase">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}