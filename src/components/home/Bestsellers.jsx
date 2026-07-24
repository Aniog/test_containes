import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import Button from '@/components/ui/Button'

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-3 font-medium">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12 lg:mt-16">
          <Link to="/shop">
            <Button variant="secondary" size="md">
              View All Jewelry
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
