import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="py-16 lg:py-24 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-light">
            You May Also Like
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {related.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
