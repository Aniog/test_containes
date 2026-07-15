import { Truck, RotateCcw, Sparkles, Shield } from "lucide-react"

const ITEMS = [
  { icon: Truck,       label: "Free Worldwide Shipping" },
  { icon: RotateCcw,   label: "30-Day Returns" },
  { icon: Sparkles,    label: "18K Gold Plated" },
  { icon: Shield,      label: "Hypoallergenic" },
]

export default function TrustBar() {
  return (
    <section className="bg-espresso-100 text-cream/90 border-y border-gold-500/20">
      <div className="container-editorial">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-y-0">
          {ITEMS.map((it, i) => (
            <li
              key={it.label}
              className={`
                flex items-center justify-center gap-3 py-5 lg:py-6
                ${i > 0 ? "lg:border-l border-gold-500/15" : ""}
                ${i === 1 ? "border-l border-gold-500/15 lg:border-l" : ""}
                ${i % 2 === 1 ? "border-l border-gold-500/15 lg:border-l" : ""}
              `}
            >
              <it.icon className="w-[18px] h-[18px] text-gold-200" strokeWidth={1.4} />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-wider-3 font-medium text-cream/85">
                {it.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
