import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-3 font-medium">
            Browse
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Category tiles */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[${category.descId}] [${category.titleId}] gold jewelry collection`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-charcoal via-brand-dark-gray to-brand-black" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-400 z-[1]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-[2]">
                <h3
                  id={category.titleId}
                  className="font-serif text-2xl sm:text-3xl text-brand-text-light tracking-wider mb-2"
                >
                  {category.name}
                </h3>
                <p
                  id={category.descId}
                  className="text-sm text-brand-muted-dark tracking-wider"
                >
                  {category.description}
                </p>
                <span className="mt-6 text-xs tracking-widest-xl uppercase text-brand-gold border-b border-brand-gold pb-1 group-hover:border-brand-gold-light group-hover:text-brand-gold-light transition-colors duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
