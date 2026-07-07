import React from "react"
import { Link } from "react-router-dom"
import { resolveImg } from "@/lib/utils"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    imgId: "cat-earrings-tile",
    desc: "Statement drops and everyday studs in warm gold.",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    imgId: "cat-necklaces-tile",
    desc: "Layered pendants and crystal collars for the collarbone.",
  },
  {
    id: "huggies",
    name: "Huggies",
    imgId: "cat-huggies-tile",
    desc: "Polished domes that hug the lobe, all day comfort.",
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-sand"
            >
              <img
                alt={tile.name}
                src={resolveImg(tile.imgId)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3 className="font-serif text-2xl uppercase tracking-[0.18em] text-cream">
                  {tile.name}
                </h3>
                <p className="sr-only">{tile.desc}</p>
                <span className="mt-2 inline-block text-xs uppercase tracking-[0.2em] text-cream/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
