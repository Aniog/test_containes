import React from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    to: "/shop?category=earrings",
    imgId: "category-earrings-7b2f1d",
    query: "gold earrings collection on model warm light editorial",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "category-necklaces-3a9e5c",
    query: "gold pendant necklace collection on model warm tones",
  },
  {
    id: "huggies",
    label: "Huggies",
    to: "/shop?category=huggies",
    imgId: "category-huggies-8c4d2b",
    query: "gold huggie hoop earrings closeup on warm neutral",
  },
]

export default function CategoryTiles() {
  return (
    <section
      aria-labelledby="categories-title"
      className="container-velmora py-20 md:py-28"
    >
      <div className="max-w-xl">
        <p className="eyebrow">Shop By Category</p>
        <h2 id="categories-title" className="editorial-h2 mt-3">
          Find your forever piece
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            className="group relative block aspect-[3/4] overflow-hidden bg-ivory focus-ring"
            aria-label={`Shop ${tile.label}`}
          >
            <img
              alt={tile.label}
              data-strk-img-id={tile.imgId}
              data-strk-img={`[categories-title] [tile-${tile.id}-label] ${tile.label} gold jewelry editorial warm light`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/10 to-transparent transition-opacity duration-300 group-hover:from-espresso/65" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
              <div>
                <p
                  id={`tile-${tile.id}-label`}
                  className="font-serif text-3xl text-ivory md:text-4xl"
                >
                  {tile.label}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 font-sans text-[11px] font-medium uppercase tracking-widest2 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop the Edit
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </div>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-300/40 text-ivory transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
