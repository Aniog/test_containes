import { Globe, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-cream-200/60 border-y border-cream-300">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map(item => (
          <div key={item.text} className="flex items-center gap-2 text-warm-800">
            <item.icon size={15} strokeWidth={1.5} className="text-gold-500" />
            <span className="text-[11px] md:text-xs tracking-wider uppercase font-medium">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
