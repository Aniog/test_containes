export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-cream border-b border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3.5">
          {items.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs uppercase tracking-[0.14em] text-stone"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
