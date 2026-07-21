import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-ink text-cream/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3.5 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.1em] whitespace-nowrap"
            >
              <item.icon className="w-3.5 h-3.5 text-gold-400/80 flex-shrink-0" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}