import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoriesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">
            Explore
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light text-velmora-text">
            Shop by Category
          </h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Background image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.description}</span>

              {/* Overlay — visible on hover */}
              <div className="absolute inset-0 bg-velmora-obsidian/20 group-hover:bg-velmora-obsidian/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-velmora-ivory uppercase tracking-widest text-center">
                    {cat.label}
                  </h3>
                  <div className="h-px bg-velmora-gold mx-auto mt-2 w-0 group-hover:w-full transition-all duration-500" />
                  <p className="font-manrope text-xs text-velmora-ivory/80 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
