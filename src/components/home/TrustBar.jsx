const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="bg-espresso border-y border-warm-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-4 md:gap-8">
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-ivory/70">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-warm-gray">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
