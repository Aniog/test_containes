import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-y border-champagne/15">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <item.icon size={14} className="text-champagne flex-shrink-0" />
              <span className="font-sans text-[11px] tracking-widest uppercase text-ivory/60">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-champagne/20 ml-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
