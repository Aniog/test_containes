export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-[10px] md:text-[11px] tracking-[0.12em] uppercase font-sans font-medium">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="w-px h-3 bg-cream/20 hidden md:block" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
