import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <div className="bg-velmora-deep text-velmora-cream border-b border-velmora-hairline-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 py-4 md:py-5">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3">
              <item.icon size={16} className="text-velmora-gold" />
              <span className="text-xs md:text-sm font-light tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
