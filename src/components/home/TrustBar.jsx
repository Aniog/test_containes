import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3 h-3 text-velmora-gold flex-shrink-0" />
              <span className="font-manrope text-[11px] uppercase tracking-widest text-white/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
