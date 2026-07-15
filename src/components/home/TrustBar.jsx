const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-deep-charcoal border-y border-warm-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2 md:gap-3">
              <span className="font-sans text-[10px] md:text-xs tracking-super-wide uppercase text-warm-cream/70">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-warm-gray-700">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
