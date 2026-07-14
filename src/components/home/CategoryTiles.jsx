import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CategoryTiles = () => {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop&q=80',
      description: 'Studs, drops & statement pieces'
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop&q=80',
      description: 'Delicate chains & pendants'
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=800&fit=crop&q=80',
      description: 'Huggie & hoop earrings'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-white text-sm tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
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
