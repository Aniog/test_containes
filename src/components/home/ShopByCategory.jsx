import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryData = [
  { ...categories[0], imgId: 'cat-earrings-a1b2', query: 'gold earrings jewelry elegant' },
  { ...categories[1], imgId: 'cat-necklaces-c2d3', query: 'gold necklace jewelry delicate pendant' },
  { ...categories[2], imgId: 'cat-huggies-e4f5', query: 'gold huggie earrings chunky dome' },
]

const ShopByCategory = () => {
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 id="shop-by-category-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-extra-wide uppercase">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categoryData.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4x5] overflow-hidden"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[shop-by-category-title] ${cat.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-all duration-300 group-hover:from-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <span
                  id={`${cat.id}-label`}
                  className="font-serif text-2xl text-white tracking-super-wide uppercase"
                >
                  {cat.name}
                </span>
                <span
                  className={`text-xs font-sans text-white/70 tracking-extra-wide uppercase mt-2 transition-all duration-300 ${hoveredId === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
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

export default ShopByCategory
