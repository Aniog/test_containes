const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => (
  <section className="border-y border-velmora-espresso/10 bg-velmora-pearl text-velmora-ink">
    <div className="mx-auto flex max-w-7xl snap-x items-center overflow-x-auto px-5 py-4 sm:px-8 lg:justify-center lg:px-10">
      {items.map((item, index) => (
        <div key={item} className="flex shrink-0 snap-center items-center text-[0.68rem] font-extrabold uppercase tracking-luxe text-velmora-espresso/80">
          <span className="whitespace-nowrap">{item}</span>
          {index < items.length - 1 && <span className="px-5 text-velmora-bronze">·</span>}
        </div>
      ))}
    </div>
  </section>
)

export default TrustBar
