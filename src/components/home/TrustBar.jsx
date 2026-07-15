import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react"

const items = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Gem, text: "18K Gold Plated" },
  { icon: ShieldCheck, text: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="bg-[#1C1C1C] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2.5 py-2">
              <Icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
              <span className="text-white/70 text-[11px] sm:text-xs uppercase tracking-[0.1em] font-medium">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
