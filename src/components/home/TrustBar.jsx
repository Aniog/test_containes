import { TRUST_BADGES } from "@/data/products"

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      aria-label="Brand promises"
      className="border-y border-espresso-800/10 bg-cream-100"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10 py-4 md:py-5">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4">
          {TRUST_BADGES.map((badge, idx) => (
            <li
              key={badge}
              className={`flex items-center justify-center gap-2 text-[11px] md:text-[12px] uppercase tracking-widest2 text-espresso-800 ${
                idx > 0 ? "md:border-l md:border-espresso-800/10" : ""
              } ${idx % 2 !== 0 ? "border-l border-espresso-800/10 md:border-l" : ""}`}
            >
              <span className="text-gold-500">✦</span>
              <span>{badge}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
