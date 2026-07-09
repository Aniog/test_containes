import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const Bestsellers = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-muted font-sans">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
