const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-3 md:py-4">
          {items.map(item => (
            <span key={item} className="text-[11px] md:text-xs tracking-widest uppercase text-stone-500">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
