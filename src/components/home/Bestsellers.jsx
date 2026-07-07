import React from "react"
import { Link } from "react-router-dom"
import { PRODUCTS } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"

export default function Bestsellers() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
