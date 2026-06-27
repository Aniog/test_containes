const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-velmora-dark border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={item} className="text-[11px] font-sans uppercase tracking-[0.15em] text-velmora-muted flex items-center gap-2">
            {i > 0 && <span className="hidden md:inline text-velmora-border">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
