import React from "react"
import { Link } from "react-router-dom"
import SectionHeading from "@/components/common/SectionHeading"
import { categories } from "@/data/products"
import { getStrkImageUrl } from "@/lib/strkImage"

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find your signature glow"
          copy="From delicate necklaces to polished huggies, every category is edited for daily wear and easy gifting."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-pearl text-velmora-ivory shadow-soft"
            >
              <img
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="760"
                src={getStrkImageUrl(category.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition duration-500 group-hover:translate-y-0">
                <p id={category.descId} className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-velmora-champagne opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-5xl font-medium text-velmora-ivory">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
