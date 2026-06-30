import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-sand">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-muted">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
