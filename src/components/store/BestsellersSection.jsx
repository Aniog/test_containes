import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import { useStockImages } from '@/hooks/useStockImages'
import { products } from '@/data/storeData'

export default function BestsellersSection() {
  const containerRef = useStockImages([])
  const featuredProducts = products.filter((product) => product.featured).slice(0, 5)

  return (
    <section id="shop" ref={containerRef} className="bg-velmora-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The polished edit our customers reach for on repeat."
            description="Refined demi-fine pieces designed for self-purchase, thoughtful gifting, and effortless everyday styling."
          />
          <Link
            to="/shop"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:text-velmora-muted"
          >
            View all pieces
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
