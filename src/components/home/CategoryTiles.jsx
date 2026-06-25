import React from 'react'
import { Link } from 'react-router-dom'
import { StrkImage } from '@/components/ui/StrkImage'
import { categories } from '@/data/products'

export function CategoryTiles() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${cat.descId}] [${cat.titleId}]`}
                ratio="3x4"
                width={700}
                alt={cat.name}
                titleId={cat.titleId}
                descId={cat.descId}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl uppercase tracking-[0.15em] text-ivory"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.desc}
                </p>
                <p className="mt-2 translate-y-2 text-[11px] uppercase tracking-[0.2em] text-ivory/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-gold">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
