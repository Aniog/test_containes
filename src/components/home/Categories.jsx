import React, { useState } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export default function Categories() {
  return (
    <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
              Shop by Category
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-primary">
              Find Your Finish
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryTile key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
  )
}

function CategoryTile({ category }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={`category-${category.id}`}
        data-strk-img={`[category-title-${category.id}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          hovered ? "bg-primary/30" : "bg-primary/10"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          id={`category-title-${category.id}`}
          className="font-serif text-2xl md:text-3xl text-white tracking-[0.15em] uppercase"
        >
          {category.label}
        </h3>
      </div>
    </Link>
  )
}
