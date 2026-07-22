import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    searchQuery: 'gold earrings collection display elegant warm',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    searchQuery: 'gold necklace chain pendant editorial warm background',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    searchQuery: 'gold huggie hoop earrings close-up collection',
    ratio: '3x4',
    width: 600,
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-caption uppercase tracking-mega-wide text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-1 text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] rounded overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-label-${cat.id}]`}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width={cat.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-all duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`category-label-${cat.id}`}
                    className="font-serif text-heading-2 text-cream uppercase tracking-ultra-wide"
                  >
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 text-caption uppercase tracking-ultra-wide text-cream/70 border-b border-cream/50 pb-0.5 group-hover:text-gold-light group-hover:border-gold-light transition-all duration-300">
                    Shop Now
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
