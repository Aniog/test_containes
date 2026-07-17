export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-sand bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xs md:text-sm uppercase tracking-widest text-stone font-medium">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-sand">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
