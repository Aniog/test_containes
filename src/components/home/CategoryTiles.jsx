import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'EARRINGS',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'NECKLACES',
    image: 'https://images.unsplash.com/photo-1599643478388-4e683c67ddb0?w=800&h=1000&fit=crop',
  },
  {
    id: 'huggies',
    name: 'HUGGIES',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&h=1000&fit=crop',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-xl uppercase text-gold-600 mb-3 font-sans">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-widest group-hover:tracking-widest-xl transition-all duration-500">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-px bg-white/60 mx-auto mt-4 group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
