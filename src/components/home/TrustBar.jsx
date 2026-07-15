const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-y border-sand bg-cream-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-4 text-center md:flex-row md:gap-0 md:px-10">
        {ITEMS.map((item, i) => (
          <div key={item} className="flex items-center md:gap-0">
            <span className="text-[11px] uppercase tracking-widest2 text-charcoal">
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="mx-6 hidden text-sand md:inline">·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
