const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-linen bg-velmora-pearl text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-4 overflow-x-auto px-4 py-4 text-center sm:px-6 lg:grid lg:grid-cols-4 lg:gap-0 lg:px-8">
        {trustItems.map((item) => (
          <p key={item} className="min-w-[14rem] snap-center border-r border-velmora-linen/80 px-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-cocoa last:border-r-0">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
