import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-5 py-20 md:py-28" ref={containerRef}>
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-2">Shop By</p>
        <h2 className="font-serif text-2xl md:text-3xl text-velvet-950 tracking-wide">Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden"
          >
            {/* Category image */}
            <img
              alt={cat.name}
              data-strk-img-id={`cat-${cat.slug}-img`}
              data-strk-img={`[cat-label-${cat.slug}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                id={`cat-label-${cat.slug}`}
                className="font-serif text-lg md:text-xl text-white tracking-wider"
              >
                {cat.name}
              </p>
              <span className="inline-block mt-2 text-xs tracking-[0.1em] uppercase text-white/70 group-hover:text-gold-400 transition-colors">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
