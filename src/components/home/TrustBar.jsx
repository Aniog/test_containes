import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <Icon size={16} strokeWidth={1.5} className="text-gold shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest3 text-ivory/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
