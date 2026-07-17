import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'

export default function TrustBar() {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Heart, label: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-ink-50 border-y border-ink-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-100/50">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 px-3"
            >
              <item.icon className="w-4 h-4 text-ink-400 flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-wider text-ink-600 font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}