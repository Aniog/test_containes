import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'

const RelatedProducts = ({ products }) => {
  return (
    <section className="mt-20 border-t border-stone-200 pt-16 md:mt-24 md:pt-20">
      <SectionHeader
        description="Complementary pieces curated to layer, gift, or complete the look."
        eyebrow="Curated for you"
        title="You May Also Like"
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
