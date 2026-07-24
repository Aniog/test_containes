import { Globe, RotateCcw, Sparkles, Shield } from 'lucide-react'

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-base border-t border-velmora-dividerDark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-velmora-textMutedOnDark">
            <item.icon className="w-4 h-4 text-velmora-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.08em]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
