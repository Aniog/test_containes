import { Link } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard?card=v3'
import SectionHeading from '@/components/common/SectionHeading'

const BestsellersSection = ({ products }) => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="A refined edit of daily signatures"
            description="Our most-loved styles blend warm gold finishes, soft sparkle, and sculptural silhouettes designed to layer effortlessly."
          />
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist transition hover:text-velmora-bronze"
          >
            View all pieces
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
