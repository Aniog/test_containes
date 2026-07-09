import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5 overflow-x-auto gap-6 md:gap-0">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-[11px] md:text-xs uppercase tracking-wider text-cream-700 font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}