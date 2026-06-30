import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-ink text-velmora-ink px-10 py-3.5 uppercase tracking-[0.18em] text-xs font-sans font-medium hover:bg-velmora-ink hover:text-white transition-colors duration-300"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  )
}
