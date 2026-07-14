const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0">
          {items.map((item, i) => (
            <div key={item} className="flex items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-gold py-3 px-4 md:px-6 whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-charcoal text-lg select-none">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
