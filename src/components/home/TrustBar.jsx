const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-stone-900 text-stone-300">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
        {trustItems.map((item, i) => (
          <span key={item} className="text-[11px] tracking-[0.12em] uppercase font-sans flex items-center gap-2">
            {item}
            {i < trustItems.length - 1 && (
              <span className="hidden md:inline text-stone-600">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
