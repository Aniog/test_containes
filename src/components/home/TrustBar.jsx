import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-dark-50 border-y border-dark-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto gap-8">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2 text-dark-600 whitespace-nowrap">
              <item.icon className="h-4 w-4 text-gold-500" />
              <span className="text-xs tracking-wider uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}