import { Link } from "react-router-dom"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
import { useImageLoader } from "@/hooks/useImageLoader"

export default function Bestsellers() {
  const ref = useImageLoader([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Bestsellers
          </h2>
          <p className="mt-4 text-sm text-muted max-w-md mx-auto">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center uppercase tracking-wide2 text-xs font-medium border border-ink text-ink px-9 py-4 hover:bg-espresso hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
