import { Shield, RotateCcw, Award, CheckCircle } from "lucide-react"

const trustItems = [
  { icon: RotateCcw, text: "Free Worldwide Shipping" },
  { icon: Shield, text: "30-Day Returns" },
  { icon: Award, text: "18K Gold Plated" },
  { icon: CheckCircle, text: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/80">
              <item.icon size={14} className="text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm tracking-wider uppercase font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}