import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-ivory border-y border-ivory/10">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/10">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 py-5 px-4 text-center"
            >
              <Icon size={18} strokeWidth={1.5} className="text-gold shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-ivory/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
