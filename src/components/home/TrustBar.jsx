const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section
      aria-label="Trust and quality"
      className="border-b border-hairline bg-ivory"
    >
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-y-3 py-4 md:grid-cols-4 md:gap-y-0">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-center justify-center gap-3 text-center font-sans text-[11px] uppercase tracking-[0.22em] text-taupe"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
