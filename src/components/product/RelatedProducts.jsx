import ProductCard from '@/components/common/ProductCard'
import SectionHeading from '@/components/common/SectionHeading'

const RelatedProducts = ({ products }) => {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="You may also like"
        title="More pieces to layer, gift, and wear on repeat"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
