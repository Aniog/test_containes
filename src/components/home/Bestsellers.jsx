import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 border-b border-velmora-espresso/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-espresso">The pieces she keeps reaching for</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">
            Polished huggies, crystal details, and giftable sets designed to feel considered at every price point.
          </p>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
