import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-charcoal text-brand-ivory/80 border-t border-brand-ivory/10">
      <div className="section-padding py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-2 flex-shrink-0">
              <feature.icon className="w-3.5 h-3.5 text-brand-gold" />
              <span className="font-sans text-[0.65rem] md:text-xs tracking-[0.1em] uppercase whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
