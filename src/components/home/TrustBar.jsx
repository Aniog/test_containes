const benefits = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand/70 bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl snap-x gap-0 overflow-x-auto px-5 sm:px-8 lg:grid lg:grid-cols-4 lg:px-10">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="min-w-[75%] snap-start border-r border-velmora-sand/70 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-velmora-cacao sm:min-w-[45%] lg:min-w-0"
          >
            {benefit}
          </div>
        ))}
      </div>
    </section>
  )
}
