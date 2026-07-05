import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-charcoal-100 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 py-4 md:py-3">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2">
              <Icon className="w-4 h-4 text-gold-600" />
              <span className="text-[11px] md:text-xs text-charcoal-600 tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
