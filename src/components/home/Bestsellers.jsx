import { Link } from 'react-router-dom'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/data/products'

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller)

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 font-sans max-w-md mx-auto">
            Our most-loved pieces, chosen for their effortless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-espresso text-espresso px-10 py-3.5 text-xs uppercase tracking-[0.16em] font-sans hover:bg-espresso hover:text-cream transition-colors duration-300"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  )
}
