const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-ink text-cream border-y border-cream/10">
      {/* Desktop: static row */}
      <div className="hidden md:flex mx-auto max-w-8xl items-center justify-center divide-x divide-cream/15">
        {ITEMS.map((item) => (
          <div
            key={item}
            className="flex-1 text-center py-4 text-[11px] uppercase tracking-[0.25em] text-cream/80"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-4">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="px-6 text-[11px] uppercase tracking-[0.25em] text-cream/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
