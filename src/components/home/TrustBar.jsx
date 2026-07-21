const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-stone bg-velmora-cream text-velmora-ink" aria-label="Store benefits">
      <div className="mx-auto flex max-w-7xl snap-x overflow-x-auto px-5 sm:px-8 lg:grid lg:grid-cols-4 lg:px-10">
        {items.map((item) => (
          <div key={item} className="min-w-[70%] snap-center border-r border-velmora-stone px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-ink first:border-l sm:min-w-[42%] lg:min-w-0">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
