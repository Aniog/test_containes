import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-espresso text-cream-dark py-3.5 md:py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-4 flex-wrap">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={16} className="text-champagne" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs uppercase tracking-widest">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
