import { getRelatedProducts } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

export function RelatedProducts({ currentProductId }) {
  const related = getRelatedProducts(currentProductId, 4)

  return (
    <section className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">You May Also Like</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
