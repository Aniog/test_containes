import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <div className="bg-velvet-secondary border-b border-cream/8">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 py-4 md:py-5">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 text-cream/90"
            >
              <item.icon size={16} className="text-accent flex-shrink-0" />
              <span className="text-[11px] md:text-xs font-sans uppercase tracking-[0.12em]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
