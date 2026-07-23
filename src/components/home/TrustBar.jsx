import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-divider bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-divider">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-4 md:py-5 bg-cream"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm font-sans font-medium text-[#1A1A1A] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}