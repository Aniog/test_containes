import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CategoryTiles() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Find Your Piece</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso-800">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-deep"
            >
              <img
                src={PLACEHOLDER}
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.slug}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso-900/20 group-hover:bg-espresso-900/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <span
                  id={`cat-label-${cat.slug}`}
                  className="font-serif text-cream text-2xl md:text-3xl uppercase tracking-widest2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
