import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      id: 'signature',
      name: 'Signature Collection',
      desc: 'Our foundational pieces—timeless silhouettes designed to be worn every day.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      count: 12
    },
    {
      id: 'heritage',
      name: 'Heritage Collection',
      desc: 'Inspired by vintage jewelry archives, reimagined for the modern woman.',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80',
      count: 8
    },
    {
      id: 'lunar',
      name: 'Lunar Collection',
      desc: 'Celestial-inspired designs featuring delicate crystal accents.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80',
      count: 6
    }
  ]

  return (
    <div>
      <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 text-center">
        <span className="text-xs tracking-[0.15em] text-[#8B7355]">CURATED WITH CARE</span>
        <h1 className="serif text-7xl tracking-[-0.02em] mt-3">Collections</h1>
        <p className="mt-6 max-w-md mx-auto text-[#6B665F]">Each collection tells a story. Discover the pieces that resonate with yours.</p>
      </div>

      <div className="space-y-px bg-[#E5DFD3]">
        {collections.map((col, idx) => (
          <Link key={idx} to="/shop" className="group block bg-white">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 px-6 py-14 items-center">
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[16/10] bg-[#F8F5F1] overflow-hidden">
                  <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </div>
              <div className="px-2">
                <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">{col.count} PIECES</div>
                <h2 className="serif text-5xl tracking-[-0.01em] mb-6">{col.name}</h2>
                <p className="text-lg text-[#6B665F] max-w-md leading-relaxed mb-8">{col.desc}</p>
                <span className="inline-block text-sm tracking-[0.1em] border-b border-[#2C2825] pb-px group-hover:text-[#8B7355] group-hover:border-[#8B7355]">Explore Collection →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <p className="text-[#6B665F]">Looking for something specific? Browse our full collection or reach out—we're happy to help you find the perfect piece.</p>
        <Link to="/shop" className="btn-primary mt-8 inline-block">Shop All</Link>
      </div>
    </div>
  )
}

export default Collections