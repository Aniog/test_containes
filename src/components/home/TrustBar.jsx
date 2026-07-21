import { Gem, Globe, Leaf, RotateCcw } from 'lucide-react'

const ITEMS = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-line bg-velmora-surface/60">
      <div className="velmora-container grid grid-cols-2 gap-y-4 py-6 md:grid-cols-4 md:py-7">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 text-center"
          >
            <Icon className="h-4 w-4 shrink-0 text-velmora-gold" strokeWidth={1.5} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-velmora-ink/80 md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
