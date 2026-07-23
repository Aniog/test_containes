const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-ink-800 text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-12 text-center">
          {items.map((item, i) => (
            <div key={item} className="flex items-center justify-center">
              {i > 0 && <span className="hidden md:block w-px h-4 bg-ink-500 mr-12" />}
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-ink-100">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
