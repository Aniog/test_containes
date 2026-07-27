function CollectionHero() {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Collection</p>
          <h1 id="shop-title" className="font-serif text-5xl leading-none sm:text-6xl">
            Everyday gold with an editorial point of view
          </h1>
          <p id="shop-desc" className="max-w-xl text-base leading-8 text-stone-200">
            Discover Velmora’s full collection of demi-fine earrings, necklaces, huggies,
            and gift-ready sets designed for women who want luxury to feel easy.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora collection"
            className="aspect-[4/3] w-full object-cover"
            data-strk-img-id="shop-hero-velmora-a3"
            data-strk-img="[shop-desc] [shop-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
          />
        </div>
      </div>
    </section>
  )
}

export default CollectionHero
