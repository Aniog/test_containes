import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velvet-800 text-cream-50/80">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3 text-xs font-sans tracking-wider uppercase max-w-[1440px] mx-auto">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 whitespace-nowrap">
            <item.icon className="w-3.5 h-3.5 text-warm-400" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
