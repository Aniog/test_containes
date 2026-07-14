import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { bestsellers } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"

export function Bestsellers() {
  return (
    <section
      id="bestsellers"
      className="container-x py-20 md:py-28"
      aria-labelledby="bestsellers-title"
    >
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p className="eyebrow">Loved by you</p>
          <h2
            id="bestsellers-title"
            className="mt-3 font-serif text-4xl text-ink-500 sm:text-5xl"
          >
            Bestsellers
          </h2>
        </div>
        <Link
          to="/shop"
          className="text-link hidden md:inline-flex"
        >
          View all
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 md:gap-y-14 lg:grid-cols-5">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} eager />
        ))}
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <Link to="/shop" className="btn-outline">
          View All Bestsellers
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}
