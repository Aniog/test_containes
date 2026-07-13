import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <feature.icon className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm text-muted-fg whitespace-nowrap">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
