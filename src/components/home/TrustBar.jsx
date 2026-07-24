import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-white/70 py-3.5 md:py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
              <item.icon size={14} strokeWidth={1.5} className="text-gold hidden sm:block" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-sans uppercase tracking-[0.08em] md:tracking-[0.1em] whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-white/20 ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
