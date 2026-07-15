import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trusts.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5 border-r border-velmora-100 last:border-r-0"
            >
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-velmora-600 tracking-wider uppercase font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}