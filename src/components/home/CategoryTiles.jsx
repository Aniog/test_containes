import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    bgId: 'cat-earrings-bg-d4e5f6',
    query: '[cat-earrings-label] [cat-section-title]',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    bgId: 'cat-necklaces-bg-g7h8i9',
    query: '[cat-necklaces-label] [cat-section-title]',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    bgId: 'cat-huggies-bg-j1k2l3',
    query: '[cat-huggies-label] [cat-section-title]',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="cat-section-title"
            className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-[#B8860B] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-[#E8E4DF] overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.bgId}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`cat-${cat.id}-label`}
                    className="text-white text-xl md:text-2xl tracking-widest uppercase font-light transition-transform duration-500 group-hover:-translate-y-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-white/60 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
