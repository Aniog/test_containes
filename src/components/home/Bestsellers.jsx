import { products } from '../../data/products'
import ProductCard from '../product/ProductCard'

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
