import { Truck, RotateCcw, ShieldCheck, Flower2 } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Flower2, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between py-3 md:py-4 overflow-x-auto scrollbar-hide gap-6 md:gap-0">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}