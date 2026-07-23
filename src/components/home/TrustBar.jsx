const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-center">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-8">
            {i > 0 && <span className="hidden md:block w-px h-3 bg-ivory/20" />}
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ivory/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
