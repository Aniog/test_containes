import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

const categories = [
  { id: 'cat-earrings', label: 'Earrings', filter: 'earrings', imgId: 'cat-tile-earrings-8a1b' },
  { id: 'cat-necklaces', label: 'Necklaces', filter: 'necklaces', imgId: 'cat-tile-necklaces-2c3d' },
  { id: 'cat-huggies', label: 'Huggies', filter: 'huggies', imgId: 'cat-tile-huggies-4e5f' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-velmora-cream tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.filter}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.id}-label] gold jewelry collection display`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <span
                    id={`${cat.id}-label`}
                    className="font-serif text-2xl md:text-3xl text-white tracking-wider"
                  >
                    {cat.label}
                  </span>
                  <div className="w-8 h-px bg-velmora-gold mx-auto mt-3 transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
