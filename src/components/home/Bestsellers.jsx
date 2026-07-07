import { products } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

export function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-dark mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
