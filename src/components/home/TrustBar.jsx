import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-warm text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center md:justify-between py-4 gap-6 md:gap-0 flex-wrap">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-velmora-gold-light" />
              <span className="text-xs tracking-wide font-medium whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}