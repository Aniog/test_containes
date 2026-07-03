import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryImages = {
  Earrings: { imgId: 'cat-earrings-f1a2', titleId: 'cat-earrings-title' },
  Necklaces: { imgId: 'cat-necklaces-g3b4', titleId: 'cat-necklaces-title' },
  Huggies: { imgId: 'cat-huggies-h5c6', titleId: 'cat-huggies-title' },
}

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => {
            const img = categoryImages[cat.slug]
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <img
                  data-strk-img-id={img.imgId}
                  data-strk-img={`[${img.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id={img.titleId}
                    className="font-serif text-2xl md:text-3xl text-white tracking-product uppercase"
                  >
                    {cat.name}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
