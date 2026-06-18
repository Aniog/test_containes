import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-muted bg-surface">
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-accent" />
              <span className="font-sans text-xs tracking-wide text-warm-gray">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
