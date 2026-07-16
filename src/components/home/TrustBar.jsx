const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-warm-charcoal border-y border-divider">
      <div className="max-w-container mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-2 text-xs md:text-sm text-warm-cream/70 font-sans tracking-wider uppercase">
              {item}
              {i < items.length - 1 && (
                <span className="hidden md:inline text-divider ml-4">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
