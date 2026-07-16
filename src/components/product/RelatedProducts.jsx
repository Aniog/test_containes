import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { getRelatedProducts } from '@/lib/products'

export default function RelatedProducts({ productId }) {
  const relatedProducts = getRelatedProducts(productId)

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pair With"
          title="You may also like"
          description="Thoughtfully selected pieces that layer beautifully with your chosen style."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
