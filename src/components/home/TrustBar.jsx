import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/80 py-3.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={14} strokeWidth={1.5} className="text-gold" />
              <span className="text-[11px] md:text-xs font-sans uppercase tracking-[0.15em] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
