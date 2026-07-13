export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <section className="border-b border-border bg-ivory">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted font-medium">
            <span className="w-1 h-1 rounded-full bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
