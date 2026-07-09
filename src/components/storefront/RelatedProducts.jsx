import ProductCard from '@/components/storefront/ProductCard.jsx'
import SectionHeading from '@/components/storefront/SectionHeading.jsx'
import { getRelatedProducts } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const RelatedProducts = ({ slug }) => {
  const products = getRelatedProducts(slug)
  const containerRef = useStrkImages([slug])

  return (
    <section ref={containerRef} className="border-t border-champagne/30 bg-ivory px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Curated pairings"
          title="You may also like"
          description="Pieces selected to layer softly together, gift beautifully, and make everyday dressing feel considered."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              titleId={`${product.id}-related-title`}
              descId={`${product.id}-related-description`}
              primaryImageId={`${product.id}-related-primary`}
              secondaryImageId={`${product.id}-related-secondary`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
