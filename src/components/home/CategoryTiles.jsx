import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading md:text-4xl text-brand-charcoal font-light">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-brand-warm"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.titleId}] gold jewelry`}
              data-strk-img-ratio={cat.ratio}
              data-strk-img-width={cat.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-espresso/20 group-hover:bg-brand-espresso/40 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={cat.titleId}
                className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:tracking-ultra-wide transition-all duration-500"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
