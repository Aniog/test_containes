import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  return (
    <section
      aria-labelledby="bestsellers-title"
      className="container-velmora py-20 md:py-28"
    >
      <div className="flex flex-col items-baseline justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">The Edit</p>
          <h2 id="bestsellers-title" className="editorial-h2 mt-3">
            Bestsellers
          </h2>
          <p className="mt-3 max-w-md text-[15px] text-stone-300">
            The five pieces our community keeps coming back to — quietly worn,
            endlessly gifted.
          </p>
        </div>
        <Link
          to="/shop"
          className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-champagne-400"
        >
          View All <ArrowRight className="ml-1 inline h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-5">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
