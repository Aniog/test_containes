import { Link } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Bestsellers
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
