import { Link } from "react-router-dom"
import { categories } from "@/data/products"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl">
          Shop by Category
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-title-${category.id}`
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
              >
                <img
                  data-strk-img-id={`category-${category.id}`}
                  data-strk-img={`[${titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src={placeholder}
                  alt={category.label}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={titleId}
                    className="border border-cream/80 px-8 py-3 font-serif text-xl uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-all duration-300 group-hover:bg-cream group-hover:text-ink"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
