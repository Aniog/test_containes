import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
  huggies: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&h=1000&fit=crop',
}

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <h2 className="serif-heading text-4xl md:text-5xl text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.slice(0, 3).map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="serif-heading text-3xl md:text-4xl mb-2 tracking-wider">{category.name}</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.count} pieces
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
