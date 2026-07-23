import { products } from '@/data/storefront'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function BestsellersSection({ onAddToCart }) {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Our most-wanted pieces"
          description="A concise edit of sculptural huggies, crystal accents, and giftable sets with an elevated finish."
        />
        <p className="max-w-sm text-sm leading-7 text-muted">
          Premium but accessible styles that carry from workday tailoring to evening dressing without feeling overdone.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            scope="home"
          />
        ))}
      </div>
    </section>
  )
}
