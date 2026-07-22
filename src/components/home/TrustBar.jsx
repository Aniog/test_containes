const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-paper border-y border-hairline">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 gap-x-6 text-center">
          {ITEMS.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-3 text-ink"
            >
              <span
                className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gold"
                aria-hidden="true"
              />
              <span className="eyebrow">{label}</span>
              {i < ITEMS.length - 1 && (
                <span className="hidden lg:inline-block w-px h-3 bg-hairline ml-6" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
