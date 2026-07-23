import React from 'react'
import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products'
import SectionHeading from '@/components/layout/SectionHeading'

const CategoryTiles = () => (
  <section id="collections" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
    <SectionHeading
      eyebrow="Collections"
      title="Shop by category"
      description="Build your everyday rotation with sculptural earrings, warm necklaces, and polished huggies."
      align="center"
    />

    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {categoryTiles.map((category) => (
        <Link
          key={category.id}
          to={`/shop?category=${category.slug}`}
          className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink shadow-card"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={category.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
              data-strk-img-id={category.imgId}
              data-strk-img={`[${category.descId}] [${category.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p id={category.titleId} className="font-serif text-3xl">{category.title}</p>
            <p id={category.descId} className="mt-3 max-w-sm text-sm leading-7 text-white/80 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </section>
)

export default CategoryTiles
