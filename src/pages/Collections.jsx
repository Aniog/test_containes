import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      title: "Signature",
      desc: "Our foundational pieces—timeless silhouettes designed to be worn daily.",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
    },
    {
      title: "Lumina",
      desc: "Crystal-embellished designs that catch the light with every movement.",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
    },
    {
      title: "Heritage",
      desc: "Inspired by vintage filigree and heirloom craftsmanship.",
      img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80"
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.15em] text-[#8B7355]">CURATED WITH INTENTION</p>
          <h1 className="font-serif text-5xl tracking-[0.05em] mt-3">Collections</h1>
        </div>

        <div className="space-y-16">
          {collections.map((col, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="aspect-[16/10] bg-[#F0EBE3] overflow-hidden">
                  <img src={col.img} alt={col.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-4xl tracking-[0.08em] mb-4">{col.title}</h2>
                <p className="text-[#6B635E] text-lg leading-relaxed mb-8">{col.desc}</p>
                <Link to="/shop" className="btn btn-outline">Shop Collection</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections