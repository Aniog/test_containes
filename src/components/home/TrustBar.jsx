import { Shield, RotateCcw, Gem, Heart } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-50 border-y border-velmora-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-velmora-600"
            >
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-sans font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}