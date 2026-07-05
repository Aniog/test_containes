import { Link } from 'react-router-dom'
import ProductCard from '@/components/ui/ProductCard'
import { getBestsellers } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Bestsellers() {
  const products = getBestsellers(5)
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs font-sans uppercase tracking-ui text-gold mb-2">
              Most Loved
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-espresso">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs font-sans uppercase tracking-ui text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block text-xs font-sans uppercase tracking-ui text-espresso border-b border-espresso pb-0.5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
