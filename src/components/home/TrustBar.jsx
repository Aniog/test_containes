import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <section className="border-y border-warm-gray bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <feature.icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs text-taupe tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
