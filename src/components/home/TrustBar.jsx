import { Truck, RotateCcw, CircleDot, Leaf } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-taupe/30 bg-velmora-base-light">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 sm:gap-10 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={16} className="text-velmora-gold" strokeWidth={1.5} />
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-velmora-ivory sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
