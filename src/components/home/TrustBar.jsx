import { Truck, RotateCcw, CircleDot, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <div className="border-b border-vel-border bg-vel-bg">
      <div className="container-vel">
        <div className="flex items-center justify-between gap-4 overflow-x-auto py-3.5 scrollbar-hide">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-wide text-vel-base"
            >
              <item.icon size={16} className="text-vel-accent" strokeWidth={1.5} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
