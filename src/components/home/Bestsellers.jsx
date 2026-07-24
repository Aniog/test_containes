import { useStrkImages } from '@/hooks/useStrkImages.jsx'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { useBestsellers } from '@/hooks/useProducts'
import { Skeleton } from '@/components/ui/skeleton'

export default function Bestsellers() {
  const { products, loading, error } = useBestsellers()
  const containerRef = useStrkImages([loading, products])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl font-medium text-velmora-espresso md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-sm font-medium uppercase tracking-wider text-velmora-espresso underline-offset-4 hover:underline md:block"
          >
            View All
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-[3/4] w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-velmora-taupe">Unable to load bestsellers.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block text-sm font-medium uppercase tracking-wider text-velmora-espresso underline-offset-4 hover:underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
