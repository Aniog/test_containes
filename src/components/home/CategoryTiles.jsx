import React from "react"
import { Link } from "react-router-dom"

const categories = [
  {
    id: "earrings",
    label: "Earrings",
    image: "https://images.unsplash.com/photo-1599643478518-a86e5802f1d3?w=800&q=80",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80",
  },
  {
    id: "huggies",
    label: "Huggies",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
  },
]

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl text-white tracking-[0.15em] uppercase">
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
