import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'

export function Bestsellers() {
  const containerRef = useRef(null)
  useStrkImages(containerRef)
  const products = PRODUCTS.filter((p) => p.bestseller)

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-vel">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
              Most Loved
            </p>
            <h2 id="bestsellers-title" className="heading-serif text-4xl md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-sm font-medium uppercase tracking-wide underline underline-offset-4 transition-colors hover:text-vel-accent md:block"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              contextId="bestsellers-title"
            />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block border-b border-vel-base pb-1 text-sm font-medium uppercase tracking-wide"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
