import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', desc: 'Gold earrings jewelry', imgId: 'cat-earrings-x1y2z3' },
  { id: 'necklaces', name: 'Necklaces', desc: 'Gold necklaces jewelry', imgId: 'cat-necklaces-a4b5c6' },
  { id: 'huggies', name: 'Huggies', desc: 'Gold huggie hoop earrings jewelry', imgId: 'cat-huggies-hoop-q2w3e4' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold">
            Explore
          </span>
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-brand-espresso mt-3">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-brand-ivory overflow-hidden"
            >
              {/* Hidden description for image query */}
              <span id={`cat-desc-${cat.id}`} className="sr-only">{cat.desc}</span>

              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[cat-desc-${cat.id}] [cat-label-${cat.id}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:scale-105 transition-transform duration-500"
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
