import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    slug: 'earrings',
    imgId: 'category-earrings-x1y2z3',
    titleId: 'cat-earrings-title',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    imgId: 'category-necklaces-a4b5c6',
    titleId: 'cat-necklaces-title',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    slug: 'huggies',
    imgId: 'category-huggies-d7e8f9',
    titleId: 'cat-huggies-title',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ivory"
            >
              <div
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.titleId}] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide"
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
