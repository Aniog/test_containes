export function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-hairline bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-espresso">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="hidden h-3 w-px bg-hairline lg:inline-block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
