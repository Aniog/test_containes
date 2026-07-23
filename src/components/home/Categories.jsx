import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    link: '/shop?category=earrings',
    imgId: 'cat-tile-earrings-x1y2z3',
    titleId: 'cat-title-earrings',
    query: 'gold earrings collection editorial warm tones jewelry',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    link: '/shop?category=necklaces',
    imgId: 'cat-tile-necklaces-a2b3c4',
    titleId: 'cat-title-necklaces',
    query: 'gold necklaces collection editorial warm tones jewelry',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    link: '/shop?category=huggies',
    imgId: 'cat-tile-huggies-d5e6f7',
    titleId: 'cat-title-huggies',
    query: 'gold huggie earrings collection editorial warm tones',
  },
]

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading mb-3">Explore</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] [cat-subtitle] gold jewelry collection elegant warm`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl text-cream-50 tracking-wide mb-2"
                >
                  {cat.name}
                </h3>
                <span className="font-sans text-xs tracking-ultra-wide uppercase text-cream-200/80 border-b border-cream-200/40 pb-0.5 group-hover:border-gold-400 group-hover:text-gold-300 transition-colors duration-300">
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
