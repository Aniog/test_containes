import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted">
              <item.icon className="w-4 h-4" />
              <span className="text-xs sm:text-sm tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
