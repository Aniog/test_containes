import { Link } from "react-router-dom"
import { categories } from "@/data/products"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((tile) => {
            const labelId = `cat-${tile.id}-label`
            return (
              <Link
                key={tile.id}
                to={tile.to}
                className="group relative overflow-hidden aspect-[4/5] bg-sand"
              >
                <img
                  alt={tile.name}
                  data-strk-img-id={tile.imgId}
                  data-strk-img={`[${labelId}] ${tile.query}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                  <h3
                    id={labelId}
                    className="font-serif text-cream text-2xl md:text-3xl uppercase tracking-[0.15em] translate-y-2 transition-transform duration-500 group-hover:translate-y-0"
                  >
                    {tile.name}
                  </h3>
                  <p className="text-cream/70 text-xs uppercase tracking-[0.2em] mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {tile.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
