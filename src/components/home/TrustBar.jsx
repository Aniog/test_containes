const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-sand bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] sm:px-6 lg:justify-center lg:px-8">
        {items.map((item) => <span key={item} className="shrink-0 snap-center text-velmora-umber">{item}</span>)}
      </div>
    </div>
  )
}
