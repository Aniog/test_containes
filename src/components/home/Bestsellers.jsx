import { Link } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">Bestsellers</h2>
          <p className="mt-4 text-sm text-muted max-w-md mx-auto">
            The pieces our community reaches for, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink text-xs uppercase tracking-widest2 px-10 py-4 rounded-full hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
