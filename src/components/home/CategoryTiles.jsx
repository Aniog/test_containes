import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function CategoryTiles() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center transition-transform duration-500 group-hover:-translate-y-1">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl uppercase tracking-[0.18em] text-ivory md:text-3xl"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-2 text-xs text-ivory/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
