import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const CategoryTiles = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Explore</p>
          <h2 className="serif-heading text-3xl md:text-4xl">Shop by Category</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="serif-heading text-3xl md:text-4xl tracking-wider mb-2">{cat.name}</h3>
                  <span className="text-xs tracking-widest uppercase border-b border-white/60 pb-1 group-hover:border-white transition-colors">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
