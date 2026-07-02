import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cats = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings-h8i9j0', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces-k1l2m3', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies-n4o5p6', titleId: 'cat-huggies-title' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand no-underline"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white"
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
