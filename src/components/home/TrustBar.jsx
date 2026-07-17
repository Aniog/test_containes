import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Award, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="bg-cream border-b border-taupeLight/60"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 md:gap-0">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.label}
                className="flex items-center justify-center gap-2.5 md:gap-3 text-espresso/80"
              >
                <Icon size={16} strokeWidth={1.4} className="text-gold-dark shrink-0" />
                <span className="text-[10px] md:text-[11px] tracking-widest2 uppercase font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
