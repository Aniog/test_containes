import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="bg-stone-900 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2.5">
              <Icon className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium text-stone-300 tracking-wide">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
