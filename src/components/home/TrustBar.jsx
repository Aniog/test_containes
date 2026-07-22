const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-mist bg-velmora-champagne text-velmora-espresso">
      <div className="mx-auto flex max-w-[1500px] snap-x gap-8 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] sm:px-8 lg:grid lg:grid-cols-4 lg:gap-0 lg:px-12">
        {items.map((item) => (
          <p key={item} className="min-w-max snap-start text-center lg:border-r lg:border-velmora-mist last:lg:border-r-0">{item}</p>
        ))}
      </div>
    </section>
  )
}
