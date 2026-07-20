import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-surface border-b border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 py-4 md:py-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-velmora-text"
            >
              <item.icon className="w-4 h-4 text-velmora-accent" />
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.12em]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
