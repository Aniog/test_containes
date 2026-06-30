import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '@/data/images'
import { categories } from '@/data/products'

const catImageMap = {
  'earrings': 'cat-earrings',
  'necklaces': 'cat-necklaces',
  'huggies': 'cat-huggies',
}

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={getImage(catImageMap[cat.id])}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide font-light">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
