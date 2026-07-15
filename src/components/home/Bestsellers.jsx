import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Bestsellers() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
