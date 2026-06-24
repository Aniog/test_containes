import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/lib/data'

const Collections = () => {
  const collections = [
    {
      id: 'the-everyday-edit',
      name: 'The Everyday Edit',
      description: 'Effortless pieces designed for daily wear — from the office to dinner.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
    },
    {
      id: 'gilded-evening',
      name: 'Gilded Evening',
      description: 'Statement pieces that command attention after dark.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
    },
    {
      id: 'the-gift-shop',
      name: 'The Gift Shop',
      description: 'Curated sets and gift-ready pieces, beautifully packaged.',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">Collections</h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="space-y-8">
          {collections.map(col => (
            <Link
              key={col.id}
              to="/shop"
              className="group block relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[16/7] md:aspect-[16/6]">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="font-serif text-2xl md:text-4xl text-white tracking-wide">{col.name}</h2>
                <p className="text-white/80 text-sm mt-2 max-w-md">{col.description}</p>
                <span className="mt-5 text-xs tracking-wide uppercase font-medium text-white border-b border-white/60 pb-1 group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections
