import { ProductCard } from "@/components/shop/ProductCard"
import { getBestsellers } from "@/data/products"
import { useImageLoader } from "@/hooks/useImageLoader"
import { Link } from "react-router-dom"

export function Bestsellers() {
  const bestsellers = getBestsellers()
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Shop Bestsellers</p>
            <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">Most Loved</h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.16em] text-warm-gray underline-offset-4 transition-colors hover:text-charcoal hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
