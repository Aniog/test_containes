import React from "react"
import { Link } from "react-router-dom"
import { CATEGORIES } from "@/data/products"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            Find Your Finish
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={cat.q}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/35 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-2xl md:text-3xl uppercase tracking-[0.16em]"
                >
                  {cat.name}
                </h3>
                <span className="mt-2 inline-block text-ivory/90 text-[11px] uppercase tracking-[0.2em] border-b border-ivory/60 pb-1 group-hover:border-gold transition-colors">
                  Shop Now
                </span>
              </div>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
