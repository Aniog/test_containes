const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="bg-bone-200 border-y border-line"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-14">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 md:gap-4 text-cocoa"
            >
              <span className="eyebrow text-cocoa">{item}</span>
              {i < ITEMS.length - 1 && (
                <span aria-hidden="true" className="hidden md:inline-block w-1 h-1 rounded-full bg-gold-300" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
