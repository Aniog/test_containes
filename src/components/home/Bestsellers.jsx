import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-cream py-20 text-velmora-ink sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 border-b border-velmora-hairline pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-antique">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-6xl">
              Most gifted, most worn.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">
            Five luminous essentials selected for their easy styling, thoughtful details, and premium accessible price points.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
