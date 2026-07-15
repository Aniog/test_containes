import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'cat-earrings', label: 'Earrings', sub: '24 styles', imgId: 'cat-earrings-img-m4n5', titleId: 'cat-earrings-title', descId: 'cat-earrings-desc', href: '/shop?category=earrings' },
  { id: 'cat-necklaces', label: 'Necklaces', sub: '18 styles', imgId: 'cat-necklaces-img-o6p7', titleId: 'cat-necklaces-title', descId: 'cat-necklaces-desc', href: '/shop?category=necklaces' },
  { id: 'cat-huggies', label: 'Huggies', sub: '12 styles', imgId: 'cat-huggies-img-q8r9', titleId: 'cat-huggies-title', descId: 'cat-huggies-desc', href: '/shop?category=huggies' },
]

export function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-velvet-500 mb-3">Browse</p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian-800 font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-velvet-400 mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[3/4] overflow-hidden block"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian-900/20 group-hover:bg-obsidian-900/40 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p id={cat.titleId} className="font-serif text-3xl text-cream uppercase tracking-widest2 font-light">
                  {cat.label}
                </p>
                <p id={cat.descId} className="font-sans text-xs text-cream/70 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.sub} · Shop Now
                </p>
                <div className="w-8 h-px bg-cream/60 mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
