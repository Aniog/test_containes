import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal border-b border-velmora-stone/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={13} strokeWidth={1.5} className="text-velmora-gold flex-shrink-0" />
              <span className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-light/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
