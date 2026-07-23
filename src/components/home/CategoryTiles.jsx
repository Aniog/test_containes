import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/common/SectionHeader.jsx'
import { categories } from '@/data/products.js'
import { getStrkImage } from '@/lib/strkImages.js'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory px-4 py-16 text-velmora-espresso sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Shop by category" title="Designed for every kind of glow" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative block overflow-hidden bg-velmora-blush shadow-soft">
              <img
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                alt={category.name}
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={getStrkImage(category.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/70 via-velmora-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-pearl transition duration-300 md:translate-y-5 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl font-medium">{category.name}</h3>
                <p id={category.descId} className="mt-2 text-sm leading-6 text-velmora-ivory/80 opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">{category.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
