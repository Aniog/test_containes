export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-border bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gold rounded-full" />
              <span className="text-xs uppercase tracking-widest font-sans text-muted-fg font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
