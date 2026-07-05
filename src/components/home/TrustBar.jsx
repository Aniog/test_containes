import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react'

const trusts = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-velvet-400/30 bg-velvet-600/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4 overflow-x-auto">
          {trusts.map((item) => (
            <div key={item.text} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs text-velvet-50/70 tracking-wider uppercase font-sans">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}