import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const benefits = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-charcoal-900/8 bg-cream-100">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-y-3 px-5 py-3.5 md:justify-between md:px-10">
        {benefits.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex w-1/2 items-center justify-center gap-2 text-xs text-charcoal-700 md:w-auto"
          >
            <Icon size={15} className="text-gold-600" strokeWidth={1.5} />
            <span className="font-medium tracking-wide">{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
