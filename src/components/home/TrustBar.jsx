import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-dark-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-ivory">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="bg-ivory py-4 px-4 flex items-center justify-center gap-2.5"
            >
              <item.icon className="w-4 h-4 text-warm-gold flex-shrink-0" />
              <span className="text-[11px] sm:text-xs tracking-[0.06em] text-charcoal/70 uppercase font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}