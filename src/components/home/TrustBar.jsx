import { Truck, RotateCcw, Shield, Award } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Award, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-midnight-200/60 bg-warm-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-midnight-200/30">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-3.5 md:py-4 bg-warm-50"
            >
              <item.icon className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-midnight-700 font-sans uppercase tracking-wider whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}