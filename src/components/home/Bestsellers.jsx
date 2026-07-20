import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const displayProducts = products.slice().sort((a, b) => {
  const aBest = a.badges.includes('bestseller') ? 1 : 0
  const bBest = b.badges.includes('bestseller') ? 1 : 0
  return bBest - aBest
})

export default function Bestsellers() {
  return (
    <section className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-rust">
              Most Loved
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-velmora-ink md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-widest text-velmora-warmgray underline-offset-4 transition hover:text-velmora-ink hover:underline"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
