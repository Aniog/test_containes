const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export function TrustBar() {
  return (
    <section className="bg-charcoal-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 bg-gold-500 rounded-full" />
              )}
              <span className="text-cream-100/80 text-xs md:text-sm font-light tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
