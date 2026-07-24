import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <item.icon width={16} height={16} className="text-champagne shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-ivory/85">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
