import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

export default function BestsellerGrid({ products }) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Most loved"
          title="Bestsellers"
          description="The pieces our community reaches for most often, from sculptural huggies to gift-ready sets."
        />
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} prefix={`home-best-${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
