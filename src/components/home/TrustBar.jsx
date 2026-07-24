const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

function TrustBar() {
  return (
    <section className="border-y border-velmora-champagne bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-champagne/70 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {trustItems.map((item) => (
          <div key={item} className="px-3 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] text-velmora-ink sm:text-xs">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
