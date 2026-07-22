const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-mist bg-velmora-porcelain text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x overflow-x-auto px-5 sm:px-8 lg:px-10">
        {trustItems.map((item) => (
          <div key={item} className="min-w-max flex-1 snap-center px-6 py-4 text-center text-[0.68rem] font-bold uppercase tracking-luxe text-velmora-espresso first:pl-0 last:pr-0">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
