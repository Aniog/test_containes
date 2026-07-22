const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => (
  <div className="border-y border-velmora-line bg-velmora-ivory text-velmora-ink">
    <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.24em] sm:px-6 lg:justify-center lg:px-8">
      {trustItems.map((item, index) => (
        <div key={item} className="flex shrink-0 snap-start items-center gap-6">
          <span>{item}</span>
          {index < trustItems.length - 1 && <span className="hidden h-px w-10 bg-velmora-line lg:block" />}
        </div>
      ))}
    </div>
  </div>
)

export default TrustBar
