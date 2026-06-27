const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-ivory border-y border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-14 gap-y-2 text-[11px] tracking-[0.22em] uppercase text-espresso-soft">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 && <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-gold" />}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}