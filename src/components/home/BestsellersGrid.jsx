import ProductCard from '@/components/shared/ProductCard'

function BestsellersGrid({ products }) {
  return (
    <section className="section-shell">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="eyebrow text-amber-200">Bestsellers</p>
          <h2 className="font-display text-4xl text-stone-100 sm:text-5xl">
            The pieces our clients return for.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-stone-300">
          Gift-ready favorites and everyday icons finished in warm gold tones and designed for repeat wear.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(0, 5).map((product) => (
          <ProductCard contextId="bestsellers-title" key={product.id} product={product} />
        ))}
      </div>

      <span className="sr-only" id="bestsellers-title">
        Velmora bestsellers collection
      </span>
    </section>
  )
}

export default BestsellersGrid
