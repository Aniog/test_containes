const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-line bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze no-scrollbar sm:justify-between sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <span key={item} className="shrink-0 snap-start whitespace-nowrap">{item}</span>
        ))}
      </div>
    </div>
  )
}
