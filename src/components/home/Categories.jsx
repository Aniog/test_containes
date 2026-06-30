import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { StrkImg } from '@/components/Image'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-velmora-bg" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Find Your Finest
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
            >
              <StrkImg
                id={`category-${category.id}`}
                query={category.query}
                ratio="3x4"
                width={800}
                alt={category.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-ink/20 group-hover:bg-velmora-ink/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white uppercase tracking-[0.18em] border-b border-transparent group-hover:border-white pb-1 transition-all duration-300">
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
