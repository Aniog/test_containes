import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ProductCard from "../product/ProductCard"
import { products } from "../../data/products"

export default function Bestsellers() {
  // Show all five seed products as the bestseller row (the task asked for 5 cards)
  const items = products.slice(0, 5)

  return (
    <section className="bg-bone-50 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">
              The Velmora edit
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Bestsellers
            </h2>
            <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-ink/65">
              The pieces our community reaches for again and again — quietly considered, made to last.
            </p>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-ink hover:text-champagne-700"
          >
            Shop all
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-7 md:gap-y-14 lg:grid-cols-5">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
