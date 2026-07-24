import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

const categoryImages = {
  earrings: { query: 'gold earrings collection elegant display', ratio: '4x3' },
  necklaces: { query: 'gold necklaces collection elegant styling', ratio: '4x3' },
  huggies: { query: 'gold huggie earrings collection display', ratio: '4x3' },
}

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="caption text-gold mb-3 tracking-mega-wide">Browse By</p>
          <h2 className="heading-lg text-charcoal">Shop by Category</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative overflow-hidden aspect-[4/3] block"
            >
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover bg-cream-300 transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[${category.id}-title] ${categoryImages[category.id].query} jewelry`}
                data-strk-img-ratio={categoryImages[category.id].ratio}
                data-strk-img-width="800"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl md:text-4xl text-cream-100 mb-2">
                  <span id={`${category.id}-title`}>{category.name}</span>
                </h3>
                <span className="caption text-cream-200/80 tracking-widest border-b border-cream-200/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-all duration-300">
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
