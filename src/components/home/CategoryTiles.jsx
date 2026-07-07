import * as React from "react"
import { Link } from "react-router-dom"

const categories = [
  { id: "earrings", label: "Earrings", imgId: "velmora-cat-earrings" },
  { id: "necklaces", label: "Necklaces", imgId: "velmora-cat-necklaces" },
  { id: "huggies", label: "Huggies", imgId: "velmora-cat-huggies" },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-stone py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
            Shop by Category
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-cream"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-espresso/20 transition-colors duration-300 group-hover:bg-velmora-espresso/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-2xl font-medium italic text-white drop-shadow md:text-3xl"
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
