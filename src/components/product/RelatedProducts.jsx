import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'

const RelatedProducts = ({ products }) => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="You may also like"
      title="A few more pieces to complete the look."
      description="Layer in another signature or add a giftable second piece while you’re here."
    />
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  </section>
)

export default RelatedProducts
