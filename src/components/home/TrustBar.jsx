import { Shield, RotateCcw, Award, Heart } from 'lucide-react'

const trusts = [
  { icon: Award, label: '18K Gold Plated' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: 'Free Worldwide Shipping' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-midnight-900/10 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-3.5 lg:py-4 overflow-x-auto scrollbar-hide gap-6">
          {trusts.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-midnight-500 flex-shrink-0"
            >
              <item.icon className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}