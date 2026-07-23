import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-warm border-y border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="font-sans text-xs md:text-sm tracking-product text-velmora-charcoal">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
