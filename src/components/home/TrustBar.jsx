export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <span key={i} className="text-xs uppercase tracking-widest text-muted-foreground font-medium flex items-center gap-2">
            {i > 0 && <span className="hidden md:inline text-border">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
