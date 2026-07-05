import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="hairline bg-vbg">
      <div className="section-padding py-3.5 flex items-center justify-center gap-6 md:gap-10 overflow-x-auto">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 flex-shrink-0">
            <Icon size={14} className="text-vmuted" />
            <span className="font-sans text-[11px] md:text-xs text-vmuted tracking-wide whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
