import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function Bestsellers() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="reveal flex flex-col items-center text-center">
        <p className="eyebrow">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Bestsellers
        </h2>
        <p className="mt-4 max-w-md font-serif text-lg italic text-stone">
          The pieces our community reaches for, again and again.
        </p>
      </div>

      <div className="reveal mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="reveal mt-14 flex justify-center">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-ink transition-colors hover:text-gold"
        >
          View All Jewelry
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </section>
  )
}
