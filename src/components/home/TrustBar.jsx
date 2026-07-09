const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-velmora-dark border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-8 py-3.5 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2 flex-shrink-0">
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-velmora-gold" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-white/80 whitespace-nowrap">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline-block w-px h-3 bg-white/10 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}