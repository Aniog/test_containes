import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Gem, label: '18K Gold Plated' },
    { icon: Shield, label: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-charcoal border-b border-cream/10">
      <div className="max-w-content mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="font-sans text-xs tracking-btn uppercase text-cream/70 font-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
