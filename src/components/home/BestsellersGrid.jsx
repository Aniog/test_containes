import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function BestsellersGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Bestsellers</h2>
          <p className="text-muted-fg text-sm mt-2">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-charcoal text-charcoal text-sm tracking-widest hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  )
}
