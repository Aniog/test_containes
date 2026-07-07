import { getRelatedProducts } from '@/data/products'
import ProductCard from './ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

function RelatedProducts({ slug }) {
  const relatedProducts = getRelatedProducts(slug)

  return (
    <section className="border-t border-stone-200 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="You May Also Like"
          title="More signatures to wear, gift, and reach for every day."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
