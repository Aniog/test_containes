import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

export default function BestsellersSection() {
  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-velmora-espresso md:text-4xl">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
