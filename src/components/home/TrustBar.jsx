import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-brand-sand bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
