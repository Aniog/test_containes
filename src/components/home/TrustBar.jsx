import { Truck, RotateCcw, CircleDot, ShieldCheck } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-stone-200 bg-velmora-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 sm:px-6 lg:gap-12 lg:px-8">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-base">
            <item.icon size={16} className="text-velmora-accent" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
