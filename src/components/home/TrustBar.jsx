const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {trustItems.map((item, i) => (
          <span key={item} className="text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-2">
            {item}
            {i < trustItems.length - 1 && (
              <span className="hidden md:inline text-white/20">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
