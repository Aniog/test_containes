import { Link } from 'react-router-dom'
import { ProductCard } from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/data/products'

export function BestsellersSection() {
  const products = PRODUCTS.slice(0, 5)

  return (
    <section className="py-20 md:py-28 bg-velvet">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-[0.16em] text-warm-gray hover:text-cream transition-colors border-b border-current pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
