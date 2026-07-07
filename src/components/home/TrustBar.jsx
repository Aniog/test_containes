import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <section className="bg-velmora-warm border-b border-velmora-sand">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 text-velmora-dark">
              <item.icon size={18} className="text-velmora-gold-dark flex-shrink-0" />
              <span className="font-sans text-[11px] md:text-xs tracking-wide uppercase text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
