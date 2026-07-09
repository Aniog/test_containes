import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velvet-900 border-b border-velvet-800">
      <div className="container-site">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-velvet-400 text-xs whitespace-nowrap">
              <item.icon className="w-3.5 h-3.5 text-gold-500/60" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}