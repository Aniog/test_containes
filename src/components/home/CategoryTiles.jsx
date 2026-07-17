import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-sans mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const isHovered = hovered === cat.id
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="relative aspect-[4/5] overflow-hidden group"
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={`https://images.unsplash.com/${cat.query}?w=800&h=1000&fit=crop&q=80`}
                  alt={cat.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-serif text-2xl md:text-3xl text-white tracking-widest uppercase transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
                    }`}
                  >
                    {cat.name}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
