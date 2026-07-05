import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="section-title text-center mb-10">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-72 md:h-96 overflow-hidden rounded-xl bg-brand-warm"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-serif text-2xl md:text-3xl uppercase tracking-wide">{category.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
