import React from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="reveal flex flex-col items-center text-center">
        <p className="eyebrow">Explore</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="reveal mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-ivory-deep"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-elegant group-hover:scale-105"
              data-strk-bg-id={cat.bgId}
              data-strk-bg={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-3xl font-light text-ivory"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-2 translate-y-2 font-serif text-base italic text-ivory/0 transition-all duration-500 ease-elegant group-hover:translate-y-0 group-hover:text-ivory/85"
              >
                {cat.tagline}
              </p>
              <span className="mt-4 inline-block font-sans text-[11px] uppercase tracking-widest text-ivory">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
