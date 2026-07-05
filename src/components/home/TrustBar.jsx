const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink-soft text-cream/85 border-y border-gold/15">
      <div className="container-velmora">
        <ul className="flex flex-wrap items-center justify-between gap-y-3 py-4 md:py-5">
          {TRUST_ITEMS.map((item, idx) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-sans font-light"
            >
              <span
                className="h-1 w-1 rounded-full bg-gold flex-shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
