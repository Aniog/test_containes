import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Frame your face',
    ratio: '3x4',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Elevate your neckline',
    ratio: '3x4',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Everyday luxury',
    ratio: '3x4',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
            Explore
          </p>
          <h2 className="font-serif text-display-sm text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-lg overflow-hidden"
            >
              <div
                data-strk-img-id={`category-tile-${cat.id}`}
                data-strk-img={`gold ${cat.name.toLowerCase()} jewelry editorial closeup`}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-serif text-heading text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-body-sm text-white/70 group-hover:text-gold-light transition-colors duration-300">
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
