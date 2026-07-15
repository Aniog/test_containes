import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const features = [
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
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center gap-2">
              <feature.icon className="w-4 h-4 text-brand-gold" />
              <span className="font-sans text-xs text-brand-muted tracking-wide">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
