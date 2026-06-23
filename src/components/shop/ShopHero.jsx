function ShopHero() {
  return (
    <section className="mb-10 overflow-hidden rounded-[2.4rem] border border-stone-800/80 bg-stone-900/70 px-6 py-10 sm:px-8 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow text-amber-200">The collection</p>
          <h1 className="font-display text-5xl text-stone-100 sm:text-6xl">
            Designed to feel polished from morning to evening.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-stone-300">
            Explore gift-ready earrings, soft statement necklaces, and sculptural huggies finished in warm metallic tones.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.75rem] border border-stone-800/80 bg-stone-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Price point</p>
            <p className="mt-3 font-display text-4xl text-stone-100">$30–$120</p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-800/80 bg-stone-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Materials</p>
            <p className="mt-3 font-display text-4xl text-stone-100">18K</p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-800/80 bg-stone-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Returns</p>
            <p className="mt-3 font-display text-4xl text-stone-100">30D</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopHero
