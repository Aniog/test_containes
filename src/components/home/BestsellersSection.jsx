import { Link } from 'react-router-dom'
import { products } from '@/data/store'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'

const BestsellersSection = () => (
  <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces our customers reach for first."
          description="Thoughtfully priced favorites with elevated finishes, designed to feel like an instant forever piece."
        />
        <Link
          className="text-xs uppercase tracking-[0.3em] text-stone-500 transition duration-300 hover:text-stone-900"
          to="/shop"
        >
          View all pieces
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            instanceId={`home-bestseller-${product.slug}`}
            priority={index < 2}
            product={product}
          />
        ))}
      </div>
    </div>
  </section>
)

export default BestsellersSection
