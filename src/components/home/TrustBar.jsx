import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] font-sans tracking-wider uppercase">{item.label}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-white/20 ml-12">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
