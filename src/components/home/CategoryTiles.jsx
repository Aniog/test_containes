import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
]

export function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-black/30 transition-opacity duration-300"
        style={{ opacity: hovered ? 0.5 : 0.3 }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="font-serif text-2xl md:text-3xl tracking-wide">
          {category.name}
        </h3>
        <div
          className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          <span>Shop Now</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  )
}
