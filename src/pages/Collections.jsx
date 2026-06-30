import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const collections = [
  {
    id: 'everyday',
    name: 'Everyday Essentials',
    description: 'Effortless pieces for daily wear',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80'
  },
  {
    id: 'gift',
    name: 'Gift Edit',
    description: 'Curated gifts for every occasion',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80'
  },
  {
    id: 'statement',
    name: 'Statement Makers',
    description: 'Bold pieces that turn heads',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80'
  }
]

export default function Collections() {
  return (
    <main className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-ultra-wide text-gold mb-4 block">
            EXPLORE
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso-800 mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-espresso-800/70 max-w-2xl mx-auto">
            Discover jewelry curated for every moment, mood, and milestone.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/shop`}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-espresso-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-serif text-2xl text-cream-50 mb-2">{collection.name}</h2>
                <p className="text-sm text-cream-100/80">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Shop by Category */}
        <div className="mt-24">
          <h2 className="font-serif text-2xl text-espresso-800 text-center mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group text-center"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg text-espresso-800 group-hover:text-gold transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
