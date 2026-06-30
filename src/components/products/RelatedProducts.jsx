import { getRelatedProducts } from '@/data/store.js'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ProductCard from './ProductCard.jsx'

export default function RelatedProducts({ slug }) {
  const relatedProducts = getRelatedProducts(slug)

  return (
    <section className="bg-stone-950 py-20 sm:py-24">
      <div className="section-shell space-y-10">
        <SectionHeading
          eyebrow="You may also like"
          title="A few more pieces to style together."
          description="Curated companions that carry the same warm, sculptural finish."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} contextId={`related-${slug}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
