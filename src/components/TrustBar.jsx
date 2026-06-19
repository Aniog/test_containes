import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="bg-[#2D2A24] text-[#E8D5B7]">
      <div className="max-w-5xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between md:justify-center md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 md:gap-2">
              <item.icon size={14} className="text-[#C69C6D] flex-shrink-0" />
              <span className="font-sans text-[11px] md:text-xs tracking-[0.04em] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}