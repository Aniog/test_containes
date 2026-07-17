import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'

function BestsellersSection({ products }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our customers return to"
            description="Every silhouette is designed for repeat wear: softly luminous finishes, easy styling, and gift-worthy presentation."
          />
          <p className="max-w-md text-sm leading-7 text-smoke">
            Hover to reveal another view and add a favorite directly to your cart.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} idPrefix="home-best" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
