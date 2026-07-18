import ProductCard from '@/components/shared/ProductCard.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'

function RelatedProducts({ products }) {
  return (
    <section className="border-t border-stone-200 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="You May Also Like"
          title="More pieces in the Velmora mood"
          description="Complementary styles selected for gifting, layering, and building an easy everyday edit."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
