export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-velmora-border bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-4 sm:gap-8">
              <span className="text-[11px] sm:text-xs uppercase tracking-extra-wide text-velmora-stone font-medium whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-velmora-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
