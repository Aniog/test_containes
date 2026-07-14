const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-5 text-center md:flex-row md:gap-0 md:px-8">
        {ITEMS.map((item, i) => (
          <div
            key={item}
            className="flex items-center md:px-8"
          >
            {i > 0 && (
              <span className="hidden h-1 w-1 rounded-full bg-champagne md:mr-8 md:inline-block" />
            )}
            <span className="text-[11px] uppercase tracking-[0.2em] text-espresso md:text-xs">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
