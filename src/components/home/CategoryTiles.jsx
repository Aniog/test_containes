import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    to: "/shop?category=Earrings"
  },
  {
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    to: "/shop?category=Necklaces"
  },
  {
    name: "Huggies",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80",
    to: "/shop?category=Huggies"
  },
]

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <span className="text-xs tracking-[0.15em] text-velmora-gold">EXPLORE</span>
        <h2 className="serif text-4xl tracking-wide mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.to} className="category-tile group block aspect-[16/10] overflow-hidden bg-velmora-surface">
            <img 
              src={cat.image} 
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="category-label">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
