import { Shield, RefreshCw, Award, Heart } from "lucide-react"

const trustItems = [
  { icon: Shield, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Award, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-white border-b border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-warm">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 px-4 bg-brand-white"
            >
              <item.icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-xs font-sans font-medium text-brand-stone uppercase tracking-wider whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}