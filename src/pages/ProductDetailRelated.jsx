import { getRelatedProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'

export default function ProductDetailRelated({ excludeSlug }) {
  const related = getRelatedProducts(excludeSlug, 3)
  if (related.length === 0) return null

  return (
    <section className="mt-20 md:mt-28">
      <SectionHeading title="You May Also Like" centered />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 max-w-5xl mx-auto">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
