import { Gem, Globe, Leaf, RefreshCw } from 'lucide-react'

const ITEMS = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section aria-label="Our promises" className="border-b border-line bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2.5 px-4 py-4 md:py-5 ${
              i < ITEMS.length - 1 ? 'md:border-r md:border-line' : ''
            } ${i % 2 === 0 ? 'border-r border-line md:border-r' : ''} ${i < 2 ? 'border-b border-line md:border-b-0' : ''}`}
          >
            <item.icon className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-taupe-dark md:text-[11px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
