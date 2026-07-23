export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-ivory border-y border-border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted font-medium tracking-wide">
            <span className="w-1 h-1 rounded-full bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
