import { getRelatedProducts } from '@/data/store'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

function RelatedProducts({ slug }) {
  const relatedProducts = getRelatedProducts(slug)

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="You may also like"
          title="More pieces with the same polished ease"
          description="Designed to layer seamlessly across gifting moments and everyday dressing."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} instanceKey="related" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
