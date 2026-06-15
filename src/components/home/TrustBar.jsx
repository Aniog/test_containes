import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'FREE WORLDWIDE SHIPPING' },
  { icon: RotateCcw, label: '30-DAY RETURNS' },
  { icon: Sparkles, label: '18K GOLD PLATED' },
  { icon: Heart, label: 'HYPOALLERGENIC' },
]

export default function TrustBar() {
  return (
    <div className="bg-linen border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center py-3 gap-4 md:gap-0">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-manrope text-[10px] tracking-widest text-obsidian/70">{label}</span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-divider ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
