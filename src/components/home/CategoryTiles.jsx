import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryData = [
  { id: 'earrings', name: 'Earrings', descId: 'cat-earrings-desc', desc: 'Gold drop earrings and ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', descId: 'cat-necklaces-desc', desc: 'Delicate gold chain necklaces' },
  { id: 'huggies', name: 'Huggies', descId: 'cat-huggies-desc', desc: 'Gold huggie hoop earrings' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden no-underline"
            >
              <div
                data-strk-bg-id={`category-tile-${cat.id}-a8f2`}
                data-strk-bg={`[${cat.descId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                className="absolute inset-0 bg-muted-light transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                  {cat.name}
                </h3>
              </div>
              <p id={cat.descId} className="sr-only">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
