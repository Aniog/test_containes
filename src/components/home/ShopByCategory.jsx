import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    query: 'gold earrings collection editorial display',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    query: 'gold necklaces collection elegant styling',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    query: 'gold huggie earrings closeup collection',
    descId: 'cat-huggies-desc',
  },
]

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ivory/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[${cat.descId}] category ${cat.name} jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-[0.15em] uppercase">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">{cat.name} collection jewelry</p>
                <span className="mt-3 text-xs text-white/80 tracking-[0.2em] uppercase border-b border-white/40 pb-0.5 group-hover:border-velmora-gold group-hover:text-velmora-gold transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
