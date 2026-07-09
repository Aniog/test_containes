import { Link } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard'
import SectionHeader from '@/components/common/SectionHeader'
import { products } from '@/data/products'

const BestsellersSection = () => {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Bestsellers"
            title="The pieces everyone reaches for first"
            description="Five polished favorites designed to move easily between self-purchase, thoughtful gifting, and every kind of dressed-up everyday moment."
          />
          <Link
            to="/shop"
            className="inline-flex rounded-full border border-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:border-amber-400 hover:bg-amber-400"
          >
            View All
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
