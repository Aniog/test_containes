import { products } from '@/data/products.js'
import ProductCard from '@/components/ProductCard.jsx'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-velmora-warmgray mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}