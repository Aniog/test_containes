const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-light">
          {items.map((it, i) => (
            <li key={it} className="flex items-center gap-8">
              <span>{it}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline text-gold/50">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
