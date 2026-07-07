const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-obsidian py-3.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-1">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-8">
              <span className="font-inter text-[10px] uppercase tracking-widest text-ivory/70">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="text-gold/40 text-xs hidden sm:inline">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
