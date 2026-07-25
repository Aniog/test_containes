import { Gem, Globe2, Leaf, RefreshCcw } from 'lucide-react'

const ITEMS = [
  { Icon: Globe2, label: 'Free Worldwide Shipping' },
  { Icon: RefreshCcw, label: '30-Day Returns' },
  { Icon: Gem, label: '18K Gold Plated' },
  { Icon: Leaf, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-sand" aria-label="Our promises">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {ITEMS.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 px-2 py-5 text-center"
            >
              <Icon className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
              <span className="text-[11px] font-semibold uppercase tracking-luxe text-mocha">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
