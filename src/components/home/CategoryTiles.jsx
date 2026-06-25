import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    slug: 'earrings',
    imgId: 'cat-tile-earrings-001',
    titleId: 'cat-title-earrings',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    slug: 'necklaces',
    imgId: 'cat-tile-necklaces-002',
    titleId: 'cat-title-necklaces',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    slug: 'huggies',
    imgId: 'cat-tile-huggies-003',
    titleId: 'cat-title-huggies',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-white text-xl md:text-2xl tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {cat.label}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="font-serif text-white text-lg md:text-xl tracking-[0.15em] uppercase">
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
