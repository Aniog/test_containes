const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-line bg-velmora-pearl text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-xs font-semibold uppercase tracking-refined sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <span key={item} className="flex items-center gap-6 text-velmora-cocoa">
            {item}
            {index < items.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-gold md:block" />}
          </span>
        ))}
      </div>
    </div>
  )
}
