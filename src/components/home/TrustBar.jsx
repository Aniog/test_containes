import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-charcoal-800 border-b border-charcoal-700">
      <div className="max-w-[1400px] mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-2">
              <feature.icon size={14} className="text-gold-400" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs font-sans text-cream-300 tracking-wide uppercase whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
