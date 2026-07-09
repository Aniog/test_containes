const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-stone bg-velmora-cream px-4 py-4 text-velmora-espresso sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto text-nowrap velmora-scrollbar md:grid md:grid-cols-4 md:gap-0 md:overflow-visible">
        {trustItems.map((item) => (
          <div key={item} className="snap-center text-center text-xs font-bold uppercase tracking-[0.24em] md:border-r md:border-velmora-stone md:last:border-r-0">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
