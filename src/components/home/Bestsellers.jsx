import { Link } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'
import { Button } from '@/components/ui/Button'

export default function Bestsellers() {
  const containerRef = useImageLoader()
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'))

  return (
    <section ref={containerRef} className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Bestsellers</h2>
          </div>
          <Button variant="outline" asChild className="hidden sm:inline-flex">
            <Link to="/shop">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button variant="outline" asChild className="w-full">
            <Link to="/shop">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
