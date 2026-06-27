import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      id: 'signature',
      name: 'Signature Collection',
      description: 'Our foundational pieces — timeless designs crafted to become your everyday essentials.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1200&q=80',
      count: 12
    },
    {
      id: 'heritage',
      name: 'Heritage Collection',
      description: 'Inspired by vintage silhouettes, reimagined for the modern woman.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
      count: 8
    },
    {
      id: 'luxe',
      name: 'Luxe Collection',
      description: 'Statement pieces featuring premium crystals and intricate detailing.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      count: 6
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">CURATED WITH CARE</div>
          <h1 className="serif text-6xl tracking-[0.03em] mb-6">Collections</h1>
          <p className="text-lg text-[#2C2823]/80">
            Each collection tells a story. From everyday elegance to statement pieces, 
            discover jewelry designed to be treasured for years to come.
          </p>
        </div>

        <div className="space-y-6">
          {collections.map((col, idx) => (
            <Link 
              key={col.id} 
              to="/shop"
              className="group grid md:grid-cols-2 gap-8 items-center border border-[#E5DFD3] p-8 md:p-12 hover:border-[#8B7355] transition-colors"
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">{col.count} PIECES</div>
                <h2 className="serif text-4xl tracking-[0.03em] mb-4">{col.name}</h2>
                <p className="text-[#2C2823]/80 mb-6 pr-4">{col.description}</p>
                <span className="btn btn-outline inline-block group-hover:bg-[#8B7355] group-hover:text-white group-hover:border-[#8B7355]">
                  Explore Collection
                </span>
              </div>
              <div className="aspect-[16/10] bg-[#1C1A17] overflow-hidden">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections
