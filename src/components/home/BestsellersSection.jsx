import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { products } from '@/lib/products'

export default function BestsellersSection() {
  return (
    <section className="bg-velmora-ivory px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Jewelry chosen on repeat"
            description="Five refined icons with luminous finishes, designed to move effortlessly from daily uniform to evening dressing."
          />
          <p className="max-w-sm text-sm leading-7 text-stone-500">
            Hover each piece to reveal a second editorial angle and add to cart in one step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <h2 id="bestsellers-title" className="sr-only">
            Velmora Bestsellers
          </h2>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
