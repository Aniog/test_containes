export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-brand-ivory border-y border-brand-warm py-4 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-sans text-xs tracking-wider uppercase text-brand-muted flex items-center gap-2"
          >
            {i > 0 && <span className="hidden md:inline text-brand-warm">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
