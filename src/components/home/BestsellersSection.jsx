import { useImageLoader } from '@/hooks/useImageLoader'
import { getBestsellers } from '@/data/products'
import { ProductCard } from '@/components/shop/ProductCard'

export function BestsellersSection() {
  const containerRef = useImageLoader([])
  const bestsellers = getBestsellers(5)

  return (
    <section ref={containerRef} className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Most Loved</p>
          <h2 className="mt-3 font-serif text-3xl tracking-wide text-espresso sm:text-4xl md:text-5xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
