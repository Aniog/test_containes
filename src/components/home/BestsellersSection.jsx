import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'

export default function BestsellersSection({ products }) {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces our customers return to"
          description="Thoughtfully priced favorites designed to feel polished from the first wear."
          align="left"
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} scopeId="home-bestsellers" />
          ))}
        </div>
      </div>
    </section>
  )
}
