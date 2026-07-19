import { Link } from "react-router-dom"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Most Loved</span>
        <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">Bestsellers</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
          The pieces our community reaches for again and again — each one designed to be
          worn, layered, and treasured.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink/30 px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
