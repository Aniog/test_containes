import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
            Bestsellers
          </h2>
          <p className="mt-3 font-sans text-sm text-warmgray">
            Our most-loved pieces, made to mix and treasure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
