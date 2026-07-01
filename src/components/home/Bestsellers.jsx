import React from "react"
import { Link } from "react-router-dom"
import ProductCard from "@/components/product/ProductCard"
import { PRODUCTS } from "@/data/products"

export default function Bestsellers() {
  const products = PRODUCTS.slice(0, 5)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-espresso text-espresso uppercase tracking-[0.18em] text-xs px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
