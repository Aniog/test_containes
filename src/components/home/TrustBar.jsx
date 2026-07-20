import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <div className="border-b border-velmora-hairline bg-white">
      <div className="container-velmora">
        <div className="grid grid-cols-2 gap-4 py-4 md:flex md:items-center md:justify-between md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-velmora-dark"
            >
              <item.icon size={16} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-xs font-medium uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
