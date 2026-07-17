import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Earrings',
    slug: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
  },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">
          Explore By
        </p>
        <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-brand-base mb-4">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-base/30 group-hover:bg-brand-base/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-white tracking-wide font-semibold group-hover:scale-105 transition-transform duration-500">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
