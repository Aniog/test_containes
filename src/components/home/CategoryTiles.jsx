import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryData = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry elegant' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace jewelry elegant' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings jewelry' },
]

const CategoryTiles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-text">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-accent-light"
            >
              <div
                data-strk-bg-id={`cat-tile-${cat.id}-bg-2e8f1b`}
                data-strk-bg={`[cat-label-${cat.id}] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-2xl text-white"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
