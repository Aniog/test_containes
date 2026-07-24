export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="w-full bg-velmora-ink py-3.5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center md:justify-between gap-4 overflow-x-auto">
        {items.map((item) => (
          <span
            key={item}
            className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-velmora-stone whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}