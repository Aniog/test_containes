import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-[#FAF8F5] border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[#6B6560]">
              <item.icon className="w-4 h-4 text-[#B8860B]" />
              <span className="text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
