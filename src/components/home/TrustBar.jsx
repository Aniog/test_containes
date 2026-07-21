import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react'

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-dark-200/40 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trusts.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-dark-600">
              <item.icon size={14} className="text-gold shrink-0" />
              <span className="text-xs md:text-sm font-sans text-dark-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}