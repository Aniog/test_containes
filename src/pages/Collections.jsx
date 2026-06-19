import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      name: "Signature",
      desc: "Our foundational pieces, designed to be worn every day.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    },
    {
      name: "Lumina",
      desc: "Crystal-embellished designs that catch the light beautifully.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      name: "Heritage",
      desc: "Inspired by vintage silhouettes, reimagined for today.",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-[#6B6560]">CURATED WITH INTENTION</p>
        <h1 className="serif text-6xl tracking-[-0.02em] mt-2">Collections</h1>
      </div>

      <div className="space-y-20">
        {collections.map((col, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-10 items-center">
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="serif text-5xl tracking-[-0.02em] mb-6">{col.name}</h2>
              <p className="text-[#6B6560] text-lg mb-8 leading-relaxed">{col.desc}</p>
              <Link to="/shop" className="btn btn-outline">Explore Collection</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections
