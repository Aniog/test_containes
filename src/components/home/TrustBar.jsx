export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
              <span className="text-xs md:text-sm text-muted tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
