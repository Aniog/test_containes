import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const TILES = [
  {
    slug: "earrings",
    label: "Earrings",
    imgId: "cat-earrings",
    taglineId: "cat-earrings-tagline",
    nameId: "cat-earrings-name",
  },
  {
    slug: "necklaces",
    label: "Necklaces",
    imgId: "cat-necklaces",
    taglineId: "cat-necklaces-tagline",
    nameId: "cat-necklaces-name",
  },
  {
    slug: "huggies",
    label: "Huggies",
    imgId: "cat-huggies",
    taglineId: "cat-huggies-tagline",
    nameId: "cat-huggies-name",
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-cream section-pad">
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="mb-10 md:mb-14">
          <p className="kicker">Shop by category</p>
          <h2 className="mt-3 headline-lg text-espresso">
            Find your everyday
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.slug}`}
              className="group block relative overflow-hidden bg-cream-deep aspect-tall"
            >
              <img
                alt={tile.label}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.taglineId}] [${tile.nameId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent transition-opacity duration-500 group-hover:from-noir/80" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <h3
                    id={tile.nameId}
                    className="font-serif text-3xl md:text-4xl text-bone"
                  >
                    {tile.label}
                  </h3>
                  <p
                    id={tile.taglineId}
                    className="mt-2 font-sans text-[10px] tracking-[0.24em] uppercase text-bone-soft"
                  >
                    Explore collection
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone-soft/40 text-bone-soft group-hover:bg-bone group-hover:text-noir group-hover:border-bone transition-all duration-500">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
