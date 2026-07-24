import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Bestsellers
          </h2>
          <p className="mt-4 text-stone max-w-md mx-auto text-sm md:text-base">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button as={Link} to="/shop" variant="outline">
            View All Jewelry
          </Button>
        </div>
      </div>
    </section>
  )
}
