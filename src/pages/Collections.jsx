import React from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    name: "The Everyday Edit",
    blurb: "Quiet, weighty pieces designed to live in — not look at.",
    imgId: "collection-everyday-3b1c2d",
    query: "minimal gold jewelry set on linen warm light editorial flatlay",
    to: "/shop?category=earrings",
  },
  {
    id: "the-gift-edit",
    name: "The Gift Edit",
    blurb: "Presented in our signature ivory box — ready to make someone's day.",
    imgId: "collection-gift-7e9f4a",
    query: "gold jewelry gift set in ivory presentation box with ribbon",
    to: "/shop?category=earrings",
  },
  {
    id: "the-evening-edit",
    name: "The Evening Edit",
    blurb: "Filigree, pavé, and a little bit of drama.",
    imgId: "collection-evening-5d8a1b",
    query: "ornate gold filigree crystal drop earrings on dark background",
    to: "/shop?category=earrings",
  },
  {
    id: "the-minimal-edit",
    name: "The Minimal Edit",
    blurb: "If you only wear one thing — make it this.",
    imgId: "collection-minimal-2c4b6e",
    query: "single gold pendant necklace minimalist on neutral background",
    to: "/shop?category=necklaces",
  },
]

export default function Collections() {
  return (
    <>
      <header className="border-b border-sand-200 bg-ivory-50 pt-28 md:pt-32">
        <div className="container-velmora pb-12 md:pb-16">
          <p className="eyebrow">Curated by us</p>
          <h1 className="editorial-h1 mt-4 text-espresso sm:text-[64px]">
            Collections
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-stone-300">
            Four edits, one curatorial point of view. Each piece chosen for
            how it wears, not just how it photographs.
          </p>
        </div>
      </header>

      <section className="container-velmora py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.id}
              to={c.to}
              className="group block focus-ring"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                <img
                  alt={c.name}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[collection-${c.id}-name] ${c.name} ${c.blurb} gold jewelry editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-ivory-300/40 text-ivory transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
              <div className="pt-5">
                <h2
                  id={`collection-${c.id}-name`}
                  className="font-serif text-2xl text-espresso sm:text-3xl"
                >
                  {c.name}
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-stone-300">
                  {c.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
