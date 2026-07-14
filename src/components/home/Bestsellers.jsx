import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Bestsellers() {
  const containerRef = useStrkImages([])
  const bestsellers = products.slice(0, 5)

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-deep">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Bestsellers
          </h2>
          <div className="mt-5 h-px w-12 bg-champagne" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink/30 px-10 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
