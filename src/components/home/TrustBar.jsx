import { Truck, RotateCcw, Gem, Shield } from 'lucide-react'

const trusts = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream border-y border-velmora-border">
      <div className="section-padding py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-16">
          {trusts.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={14} className="text-velmora-gold" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs text-velmora-charcoal tracking-wider uppercase font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
