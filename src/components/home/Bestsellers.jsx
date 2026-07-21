import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { bestsellers } from "@/data/products"
import ProductCard from "@/components/shop/ProductCard"

export default function Bestsellers() {
  return (
    <section
      id="home-bestsellers"
      className="bg-bone py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne-deep mb-3">
              Most Loved
            </p>
            <h2
              id="home-bestsellers-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] tracking-widest3 uppercase text-ink hover:text-champagne-deep transition-colors duration-300"
          >
            View All
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
