const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-brand-base text-brand-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.12em] font-light text-white/70">{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-white/30 mx-2">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
