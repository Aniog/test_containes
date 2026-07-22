import React from "react"
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import { products } from "@/data/products"

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Bestsellers</h2>
          <p className="mt-3 text-stone-500 text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that elevate any outfit.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.15em] hover:bg-stone-900 hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
