import { products } from '@/data/store.js'
import ProductCard from '@/components/products/ProductCard.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function BestsellersSection() {
  return (
    <section className="bg-stone-950 py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces our clients reach for first."
          description="Five modern signatures designed to feel polished from weekday mornings to candlelit dinners."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} contextId="bestsellers" product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
