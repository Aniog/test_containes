import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const BestsellersSection = () => (
  <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-ink sm:px-8 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col gap-5 border-b border-velmora-espresso/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-bronze">Most loved</p>
          <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-ink sm:text-6xl">Bestsellers</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-velmora-espresso/70">
          Giftable, layerable, and made to move from weekday rituals to candlelit plans.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} context="bestseller" />
        ))}
      </div>
    </div>
  </section>
)

export default BestsellersSection
