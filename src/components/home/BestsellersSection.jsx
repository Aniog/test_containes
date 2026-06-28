import SectionHeading from '@/components/home/SectionHeading'
import ProductCard from '@/components/products/ProductCard'

export default function BestsellersSection({ products }) {
  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces our customers reach for first"
          description="A curated edit of easy gifting favorites, everyday icons, and softly sculpted gold silhouettes."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
