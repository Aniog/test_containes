import ProductCard from '@/components/shop/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return (
    <section id="shop" className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-mist pb-8 md:flex-row md:items-end">
          <div>
            <p id="bestsellers-subtitle" className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">
              Most loved, never loud
            </p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">
              Bestsellers
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-espresso">
            Signature pieces chosen for gifting, stacking, and the soft gold glow that works from weekday to wedding guest.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
