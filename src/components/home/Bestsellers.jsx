import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-sand/70 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Most loved</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso sm:text-5xl">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze underline-offset-8 transition hover:text-velmora-espresso hover:underline"
          >
            Shop all pieces
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
