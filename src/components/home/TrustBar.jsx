import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="hairline bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs uppercase tracking-wider text-taupe font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}