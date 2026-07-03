import { Link } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"
import { getBestsellers } from "@/data/products"

export default function Bestsellers() {
  const products = getBestsellers()

  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          Most Loved
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Bestsellers
        </h2>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-flex border border-ink px-10 py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
