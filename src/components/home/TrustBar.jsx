import { Truck, RotateCcw, ShieldCheck, Droplets } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Droplets, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-brand-200/60 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-center shrink-0">
              <item.icon className="w-4 h-4 text-gold-500" />
              <span className="text-[11px] md:text-xs text-brand-600 font-sans tracking-wider whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}