import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { getBestsellers } from '@/data/products'

export default function Bestsellers() {
  const products = getBestsellers()

  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imgId={`bestseller-${product.id}-img`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 border border-velmora-text text-velmora-text font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-text hover:text-velmora-bg transition-colors"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  )
}
