const CollectionHero = () => (
  <section className="border-b border-stone-200/10 bg-stone-950 px-6 pb-10 pt-32 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div className="space-y-4">
        <p className="tracking-kicker text-xs uppercase text-amber-200">Collections</p>
        <h1 id="collections-title" className="font-display text-5xl font-semibold leading-none text-stone-50 md:text-6xl">
          Quiet luxury, shaped in gold.
        </h1>
        <p id="collections-desc" className="max-w-xl text-base leading-7 text-stone-300">
          An editorial edit of demi-fine earrings, necklaces, huggies, and giftable sets designed to feel premium while staying beautifully wearable.
        </p>
        <span id="collections-cue" className="sr-only">
          editorial still life of layered gold jewelry on warm neutral surfaces with velvet styling
        </span>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-stone-200/10">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora collection still life"
          className="aspect-[16/9] h-full w-full object-cover"
          data-strk-img-id="collections-hero-7ad1"
          data-strk-img="[collections-cue] [collections-desc] [collections-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1400"
        />
      </div>
    </div>
  </section>
)

export default CollectionHero
