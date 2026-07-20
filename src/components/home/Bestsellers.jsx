import { Link } from 'react-router-dom'
import { products } from '@/lib/data'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-primary">Bestsellers</h2>
          <p className="mt-3 text-muted-foreground text-sm">Our most-loved pieces, chosen by you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-accent text-accent px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
