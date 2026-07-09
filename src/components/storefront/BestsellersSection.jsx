import { PRODUCTS } from '@/data/products.js'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import SectionHeading from '@/components/storefront/SectionHeading.jsx'

const BestsellersSection = () => (
  <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="Bestsellers"
        title="Pieces customers return to again and again"
        description="A concise edit of warm gold favorites designed for thoughtful gifting, polished stacking, and that effortless first finished look."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {PRODUCTS.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 2}
            titleId={`${product.id}-bestsellers-title`}
            descId={`${product.id}-bestsellers-description`}
            primaryImageId={`${product.id}-bestsellers-primary`}
            secondaryImageId={`${product.id}-bestsellers-secondary`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default BestsellersSection
