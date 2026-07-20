const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => (
  <div className="border-y border-velmora-stone/70 bg-velmora-ivory text-velmora-espresso">
    <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-5 py-4 text-center sm:px-8 md:grid md:grid-cols-4 md:gap-0">
      {trustItems.map((item) => (
        <div key={item} className="min-w-max snap-center px-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-taupe md:border-l md:border-velmora-stone/60 first:md:border-l-0">
          {item}
        </div>
      ))}
    </div>
  </div>
)

export default TrustBar
