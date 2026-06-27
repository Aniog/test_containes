import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">
          Bestsellers
        </h2>
        <div className="mx-auto mt-6 h-px w-12 bg-velmora-gold" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-velmora-ink px-10 py-4 text-[11px] uppercase tracking-[0.2em] text-velmora-ink transition-colors duration-300 hover:bg-velmora-ink hover:text-velmora-cream"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
