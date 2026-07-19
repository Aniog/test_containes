const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => (
  <div className="border-y border-velmora-line bg-velmora-ivory text-velmora-ink">
    <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-velmora-taupe md:justify-center md:px-8">
      {trustItems.map((item) => (
        <div key={item} className="flex shrink-0 snap-center items-center gap-8">
          <span>{item}</span>
          <span className="h-1 w-1 rounded-full bg-velmora-gold" aria-hidden="true" />
        </div>
      ))}
    </div>
  </div>
)

export default TrustBar
