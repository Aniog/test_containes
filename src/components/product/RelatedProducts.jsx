import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/shop/ProductCard'

const RelatedProducts = ({ products }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Curated for you"
        title="You may also like"
        titleId="related-products-title"
        description="A few more polished pieces from the Velmora collection."
        descriptionId="related-products-desc"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            sectionTitleId="related-products-title"
            sectionDescId="related-products-desc"
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
