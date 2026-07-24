import ProductCard from '../common/ProductCard'
import SectionHeading from '../common/SectionHeading'

const RelatedProducts = ({ products }) => (
  <section className="px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="You may also like"
        title="More to layer into the story"
        description="A few complementary pieces selected for gifting sets, everyday stacking, and a softly polished finish."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} scope="related" />
        ))}
      </div>
    </div>
  </section>
)

export default RelatedProducts
