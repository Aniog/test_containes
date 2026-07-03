export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="bg-velvet-950 text-velvet-300">
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-sans text-velvet-400">
            {i > 0 && <span className="w-px h-3 bg-velvet-700 hidden sm:block" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}