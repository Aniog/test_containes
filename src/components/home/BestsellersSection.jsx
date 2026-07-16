import ProductCard from '@/components/store/ProductCard'

export default function BestsellersSection({ products, onAddToCart }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-editorial text-velmora-muted">Bestsellers</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">
              The pieces our clients return to
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-muted">
            Best-loved demi-fine styles with polished finishes, luminous stones, and the quiet confidence of everyday luxury.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              context="bestseller"
              sectionId="bestsellers-title"
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
