import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

const TrustBar = () => {
  return (
    <section className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-text-muted">
              <feature.icon className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium tracking-wide-sm uppercase">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
