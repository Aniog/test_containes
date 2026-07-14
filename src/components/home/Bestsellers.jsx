import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

const Bestsellers = () => (
  <section id="bestsellers" className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 border-b border-velmora-linen pb-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Bestsellers</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ink md:text-6xl">Most Loved in Gold</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-velmora-clay">
          Five refined favorites made for gifting, self-purchase, and the jewelry box you reach for every morning.
        </p>
      </div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => <ProductCard key={product.id} product={product} prefix="bestseller" />)}
      </div>
    </div>
  </section>
)

export default Bestsellers
