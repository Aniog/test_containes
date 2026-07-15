import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

export default function RelatedProducts({ products }) {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="You may also like"
        title="More pieces with the same polished ease."
        description="Designed to layer together beautifully or become the next gift-ready favorite."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
