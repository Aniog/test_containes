import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-dark text-velmora-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {trustItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-velmora-gold" />
            <span className="font-sans text-xs md:text-sm tracking-[0.05em] uppercase text-velmora-light/90">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
