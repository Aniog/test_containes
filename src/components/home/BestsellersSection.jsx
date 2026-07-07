import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

function BestsellersSection() {
  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our community reaches for on repeat."
            description="Five polished signatures, chosen for everyday shine, effortless gifting, and a premium finish that still feels easy to wear."
          />
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.3em] text-stone-700 transition duration-300 hover:text-amber-600"
          >
            View all products
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
