import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-b border-stone/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-sans text-xs tracking-widest uppercase text-ivory-muted font-medium whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-stone/50 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
