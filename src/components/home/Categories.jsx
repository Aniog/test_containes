import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings elegant jewelry display',
    imgId: 'cat-earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklace chain elegant jewelry display',
    imgId: 'cat-necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie hoop earrings elegant jewelry display',
    imgId: 'cat-huggies',
  },
]

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-3">
            Discover
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
                    {cat.label}
                  </h3>
                  <span className="inline-block mt-2 text-xs tracking-widest uppercase text-cream-200 border-b border-cream-200/60 pb-0.5 group-hover:border-gold-light group-hover:text-gold-light transition-colors">
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
