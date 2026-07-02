import { Truck, RotateCcw, Gem, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velvet border-b border-mink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={13} className="text-champagne flex-shrink-0" />
              <span className="font-sans text-[10px] tracking-widest uppercase text-parchment/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
