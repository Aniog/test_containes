import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="section-padding">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
            Most Loved
          </p>
          <h2 className="section-title text-3xl md:text-heading">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
