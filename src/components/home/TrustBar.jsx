const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => (
  <section className="border-b border-velmora-linen bg-velmora-porcelain text-velmora-ink">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px divide-velmora-linen px-4 py-4 text-center text-[0.68rem] font-bold uppercase tracking-velmora sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
      {items.map((item) => <p key={item} className="py-2 text-velmora-ink">{item}</p>)}
    </div>
  </section>
)

export default TrustBar
