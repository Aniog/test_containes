const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-linen bg-velmora-cream text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] md:justify-center md:px-8">
        {trustItems.map((item) => (
          <span key={item} className="shrink-0 snap-start text-velmora-mocha">{item}</span>
        ))}
      </div>
    </section>
  )
}
