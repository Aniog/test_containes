import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function BestsellersGrid() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-800 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}