export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-velmora-deep text-velmora-cream/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
        {items.map((text, i) => (
          <span key={i} className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase font-sans font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
