import React from "react"
import { Link } from "react-router-dom"
import { resolveImg } from "@/lib/utils"

const COLLECTIONS = [
  {
    id: "earrings",
    name: "The Earring Edit",
    desc: "Statement drops, sculptural cuffs, and everyday studs.",
    imgId: "coll-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Layered pendants and crystal collars for the collarbone.",
    imgId: "coll-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Polished domes that hug the lobe, all-day comfort.",
    imgId: "coll-huggies",
  },
]

export default function Collections() {
  return (
    <div className="bg-cream pt-20 md:pt-24">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Curated</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Collections</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Explore our jewelry, grouped by the way you wear it.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-6">
          {COLLECTIONS.map((c, i) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className={`group grid items-stretch gap-6 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <img
                  alt={c.name}
                  src={resolveImg(c.imgId)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Collection 0{i + 1}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                  {c.name}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
                  {c.desc}
                </p>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-ink underline group-hover:text-gold">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
