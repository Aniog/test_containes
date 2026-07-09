import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react'

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-4 py-3">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={12} strokeWidth={1.5} className="text-velmora-gold flex-shrink-0" />
              <span className="font-manrope text-[10px] tracking-[0.14em] uppercase text-white/70">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
