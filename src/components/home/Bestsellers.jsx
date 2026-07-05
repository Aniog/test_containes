import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 tracking-wide">Bestsellers</h2>
          <p className="mt-2 text-sm text-charcoal-500">Our most-loved pieces, chosen by you.</p>
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
