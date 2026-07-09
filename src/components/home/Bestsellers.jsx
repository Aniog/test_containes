import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section id="shop" className="bg-velmora-ivory px-4 py-16 text-velmora-espresso sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-goldDark">
              Bestsellers
            </p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">
              Quiet shine, most loved
            </h2>
          </div>
          <Link
            to="/shop"
            className="w-fit border border-velmora-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-gold hover:text-velmora-cream"
          >
            View all pieces
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
