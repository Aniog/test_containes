import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

export default function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ]

  return (
    <section className="border-y border-brand-sand bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-brand-slate">
              <item.icon className="w-4 h-4 text-brand-gold" />
              <span className="text-xs tracking-wider uppercase font-sans">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
