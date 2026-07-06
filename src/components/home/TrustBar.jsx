import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-cream-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <feature.icon className="w-4 h-4 text-gold" />
              <span className="text-xs text-stone tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
