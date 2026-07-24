import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings collection elegant display dark velvet background',
    imgId: 'cat-tile-earrings-8a3f2c',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklaces collection elegant display warm lighting',
    imgId: 'cat-tile-necklaces-5d7e1b',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie earrings collection elegant display warm background',
    imgId: 'cat-tile-huggies-2c9a4f',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-sm overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.name.toLowerCase()}] gold jewelry collection`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/25 group-hover:bg-charcoal/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 group-hover:text-gold transition-colors duration-300">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
