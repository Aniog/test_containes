export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-brand-sand bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-4">
              <span className="text-[11px] md:text-xs tracking-widest-plus uppercase text-brand-charcoal font-sans font-medium">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-brand-sand" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
