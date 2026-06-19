import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      name: "Signature",
      desc: "Our foundational pieces. Timeless designs meant to be worn daily.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
      count: "12 pieces"
    },
    {
      name: "Bridal",
      desc: "Delicate pieces for your most cherished moments.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      count: "8 pieces"
    },
    {
      name: "Everyday",
      desc: "Effortless elegance for the modern woman.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      count: "15 pieces"
    },
    {
      name: "Gifting",
      desc: "Thoughtfully curated sets for those you love.",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      count: "6 pieces"
    }
  ]

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center pt-8 pb-16">
          <div className="text-xs tracking-[0.15em] text-[#6B6560]">CURATED WITH INTENTION</div>
          <h1 className="text-6xl serif mt-3">Collections</h1>
          <p className="mt-4 text-[#6B6560] max-w-md mx-auto">Each collection tells a story. Discover pieces designed for every chapter of your life.</p>
        </div>

        <div className="space-y-4">
          {collections.map((col, i) => (
            <Link key={i} to="/shop" className="group grid md:grid-cols-2 gap-8 items-center border border-[#E5E0D8] p-8 hover:border-[#B89B6E] transition-colors">
              <div className="order-2 md:order-1">
                <div className="text-xs tracking-[0.15em] text-[#B89B6E] mb-2">{col.count}</div>
                <h3 className="text-4xl serif mb-4">{col.name}</h3>
                <p className="text-[#6B6560] mb-6 pr-8">{col.desc}</p>
                <span className="btn btn-gold inline-block">Explore Collection</span>
              </div>
              <div className="order-1 md:order-2 aspect-[16/10] overflow-hidden bg-[#1C1A18]">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections