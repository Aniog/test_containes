import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    sub: 'Studs, drops & cuffs',
    to: '/shop?category=Earrings',
    imgId: 'cat-earrings-img-s1t2u3',
    titleId: 'cat-earrings-title',
    subId: 'cat-earrings-sub',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    sub: 'Pendants & chains',
    to: '/shop?category=Necklaces',
    imgId: 'cat-necklaces-img-v4w5x6',
    titleId: 'cat-necklaces-title',
    subId: 'cat-necklaces-sub',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    sub: 'Everyday hoops',
    to: '/shop?category=Huggies',
    imgId: 'cat-huggies-img-y7z8a9',
    titleId: 'cat-huggies-title',
    subId: 'cat-huggies-sub',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Browse</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-parchment block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.subId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p id={cat.subId} className="font-sans text-xs tracking-widest uppercase text-gold/80 mb-1">{cat.sub}</p>
                <h3 id={cat.titleId} className="font-serif text-3xl md:text-4xl font-light text-ivory">{cat.label}</h3>
                <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-xs tracking-widest uppercase text-ivory/80">Shop Now</span>
                  <div className="w-6 h-px bg-gold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
