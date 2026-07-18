const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-linen bg-velmora-pearl text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-nav sm:px-6 lg:justify-center lg:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex shrink-0 snap-center items-center gap-6 text-velmora-cocoa">
            <span>{item}</span>
            {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne lg:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}
