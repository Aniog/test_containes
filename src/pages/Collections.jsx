import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      id: 'signature',
      name: 'Signature Collection',
      desc: 'Our foundational pieces — timeless designs meant to be worn every day.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
      count: 12
    },
    {
      id: 'luxe',
      name: 'Luxe Collection',
      desc: 'Elevated designs featuring premium crystals and intricate detailing.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      count: 8
    },
    {
      id: 'heritage',
      name: 'Heritage Collection',
      desc: 'Inspired by vintage silhouettes, reimagined for the modern woman.',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80',
      count: 6
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="max-w-2xl mb-14">
        <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">CURATED WITH CARE</div>
        <h1 className="font-serif text-5xl mb-4">Collections</h1>
        <p className="text-[#6B665F] text-lg">Each collection tells a story. Discover the pieces that resonate with yours.</p>
      </div>

      <div className="space-y-6">
        {collections.map((col, index) => (
          <Link
            key={col.id}
            to="/shop"
            className="group grid md:grid-cols-2 gap-8 items-center border border-[#E5DFD3] p-8 md:p-12 hover:border-[#B8976D] transition-colors"
          >
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="text-xs tracking-[0.15em] text-[#B8976D] mb-3">{col.count} PIECES</div>
              <h2 className="font-serif text-4xl mb-4 tracking-[0.02em]">{col.name}</h2>
              <p className="text-[#6B665F] mb-6 max-w-md">{col.desc}</p>
              <span className="btn btn-gold inline-block text-sm">Explore Collection →</span>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-[#F5F1EA]">
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Collections