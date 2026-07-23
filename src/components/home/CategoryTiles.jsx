import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'earrings', name: 'Earrings', path: '/collection?category=earrings' },
  { id: 'necklaces', name: 'Necklaces', path: '/collection?category=necklaces' },
  { id: 'huggies', name: 'Huggies', path: '/collection?category=huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">Shop by Category</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]" id="categories-title">
            Find Your Style
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#1A1A1A]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${cat.id}`}
                data-strk-bg={`[cat-name-${cat.id}] [categories-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

              {/* Label on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-2xl md:text-3xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  id={`cat-name-${cat.id}`}
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}