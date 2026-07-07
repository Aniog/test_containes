import { Truck, RotateCcw, Gem, HeartPulse } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: HeartPulse, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-mist bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-y-3 md:flex md:items-center md:justify-between">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-taupe md:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
