const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section
      aria-label="Brand promises"
      className="bg-ink-soft text-bone border-y border-bone/10"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-3.5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-2 text-[11px] tracking-widest2 uppercase text-bone/85">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center">
              <span>{item}</span>
              {i < ITEMS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block w-1 h-1 rounded-full bg-bone/30 mx-6"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
