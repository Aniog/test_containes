export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-espresso text-cream/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-16 py-3 overflow-x-auto whitespace-nowrap">
          {items.map((text, i) => (
            <span key={i} className="text-[10px] sm:text-xs tracking-[0.15em] uppercase flex-shrink-0">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
