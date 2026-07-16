const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cocoa no-scrollbar sm:px-8 lg:justify-center lg:px-10">
        {trustItems.map((item, index) => (
          <div key={item} className="flex shrink-0 snap-start items-center gap-8">
            <span>{item}</span>
            {index < trustItems.length - 1 && <span className="hidden h-px w-8 bg-velmora-champagne/70 lg:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}
