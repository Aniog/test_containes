import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { 
    name: 'Earrings', 
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    link: '/shop?category=earrings'
  },
  { 
    name: 'Necklaces', 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    link: '/shop?category=necklaces'
  },
  { 
    name: 'Huggies', 
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    link: '/shop?category=huggies'
  }
]

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.name}
            to={category.link}
            className="group relative overflow-hidden aspect-square bg-gray-100 block"
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay with label */}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 
                          flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-serif text-3xl text-white uppercase tracking-wider mb-2">
                  {category.name}
                </h3>
                <div className="w-12 h-px bg-white mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
