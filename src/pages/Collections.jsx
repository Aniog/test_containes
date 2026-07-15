import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

const collections = [
  {
    id: 'everyday',
    title: 'Everyday Essentials',
    desc: 'Timeless pieces designed for daily wear. Lightweight, versatile, and made to last.',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80',
    products: [3, 1],
  },
  {
    id: 'statement',
    title: 'Statement Pieces',
    desc: 'Bold designs that command attention. For evenings, celebrations, and moments that deserve to shine.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80',
    products: [2, 5],
  },
  {
    id: 'heirloom',
    title: 'Heirloom Collection',
    desc: 'Pieces worthy of passing down. Thoughtfully designed with future generations in mind.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80',
    products: [4, 5],
  },
]

export default function Collections() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Curated with Care</span>
          <h1 className="serif-heading text-5xl mt-2">Collections</h1>
          <p className="mt-4 text-[#6B635C] max-w-md mx-auto">
            Thoughtfully grouped pieces for every chapter of your story.
          </p>
        </div>

        {/* Collection Hero Sections */}
        {collections.map((col, idx) => {
          const colProducts = products.filter((p) => col.products.includes(p.id))
          return (
            <div key={col.id} className={`mb-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex gap-10 items-center`}>
              <div className="md:w-1/2">
                <div className="aspect-[16/11] bg-[#EDE8E0] overflow-hidden">
                  <img src={col.image} alt={col.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h2 className="serif-heading text-4xl mb-4">{col.title}</h2>
                <p className="text-[#1A1A1A] leading-relaxed mb-6">{col.desc}</p>
                <Link to={`/shop?category=${colProducts[0]?.category || 'all'}`} className="btn btn-outline inline-block text-sm">
                  Shop Collection
                </Link>
              </div>
            </div>
          )
        })}

        {/* Featured Products from Collections */}
        <div className="pt-8 border-t border-[#EDE8E0]">
          <h3 className="serif-heading text-2xl mb-8">Featured Across Collections</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
