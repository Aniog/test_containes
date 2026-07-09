import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

const RelatedProducts = ({ products }) => (
  <section className="border-t border-velmora-line bg-velmora-ivory py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Curated edit"
        title="You may also like"
        description="Pair your current favorite with complementary everyday icons from the Velmora edit."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  </section>
)

export default RelatedProducts
