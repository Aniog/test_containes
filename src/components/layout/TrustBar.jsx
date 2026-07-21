import { Truck, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <div className="border-b border-champagne bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-taupe">
            <item.icon className="h-4 w-4 text-gold" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
