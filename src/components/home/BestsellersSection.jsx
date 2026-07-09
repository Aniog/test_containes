import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-10 text-center md:mb-14">
          <p className="label-uppercase mb-3 text-gold-600">Most Loved</p>
          <h2 className="heading-display text-3xl md:text-5xl">Bestsellers</h2>
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
