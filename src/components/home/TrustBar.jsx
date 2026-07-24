export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-warm-black text-warm-cream/90 py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap justify-center gap-x-8 gap-y-1 md:gap-x-12">
        {items.map((item, i) => (
          <span key={i} className="font-sans text-xs md:text-sm tracking-wide-15 uppercase flex items-center gap-2">
            {i < items.length - 1 && (
              <span className="hidden md:inline text-gold">·</span>
            )}
            {item}
            {i < items.length - 1 && (
              <span className="hidden md:inline text-gold">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
