import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categoryImages = {
    earrings: { imgId: 'cat-earrings-img-z2a3b4', desc: 'Gold drop earrings elegant' },
    necklaces: { imgId: 'cat-necklaces-img-c5d6e7', desc: 'Gold chain necklace layered' },
    huggies: { imgId: 'cat-huggies-img-f8g9h0', desc: 'Gold huggie hoop earrings' },
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-foreground">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-surface"
            >
              <img
                alt={cat.name}
                data-strk-img-id={categoryImages[cat.id].imgId}
                data-strk-img={`[${cat.titleId}] [categories-title] ${categoryImages[cat.id].desc}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  {cat.name}
                </h3>
              </div>
              <p id={cat.descId} className="sr-only">{cat.name} collection fine gold jewelry</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
