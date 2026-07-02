import React from "react"
import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"

export const BestsellersSection = () => {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">Most Loved</p>
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-[0.12em] text-ink underline-offset-4 hover:text-gold hover:underline"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
