import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { name: 'Earrings', slug: 'Earrings', query: 'gold earrings jewelry' },
  { name: 'Necklaces', slug: 'Necklaces', query: 'gold necklace jewelry' },
  { name: 'Huggies', slug: 'Huggies', query: 'gold huggie earrings' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[0.04em] text-rich-brown">
          Shop by Category
        </h2>
        <div className="w-[40px] h-[1px] bg-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-soft-sand overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={`category-${cat.slug}-img`}
              data-strk-img={`[category-${cat.slug}-name] ${cat.query}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id={`category-${cat.slug}-name`} className="hidden">{cat.name}</span>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-500" />

            {/* Label */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-warm-white/90 backdrop-blur-sm text-rich-brown font-serif text-lg tracking-[0.08em] uppercase px-6 py-3 transition-all duration-500 group-hover:bg-gold group-hover:text-espresso">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
