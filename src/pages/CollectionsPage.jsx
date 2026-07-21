import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-4">Collections</h1>
          <p className="text-[#78716C] max-w-xl mx-auto">
            Explore our curated collections, each piece designed to complement your unique style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] bg-[#F5F5F4] rounded-xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{category.name}</h3>
                  <span className="inline-flex items-center text-xs text-white/80 tracking-widest uppercase group-hover:text-white transition-colors">
                    Shop Now
                    <svg className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionsPage
