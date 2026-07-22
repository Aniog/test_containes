import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-velvet-border bg-velvet-bg">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <item.icon className="w-4 h-4 text-velvet-gold flex-shrink-0" />
              <span className="font-sans text-xs text-velvet-muted tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}