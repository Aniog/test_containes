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
    earrings: { imgId: 'cat-earrings-img-w1x2y3', query: '[cat-earrings-title] gold earrings jewelry' },
    necklaces: { imgId: 'cat-necklaces-img-z4a5b6', query: '[cat-necklaces-title] gold necklace jewelry' },
    huggies: { imgId: 'cat-huggies-img-c7d8e9', query: '[cat-huggies-title] gold huggie earrings jewelry' },
  }

  return (
    <section ref={containerRef} className="section-padding bg-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group bg-brand-sand"
            >
              <img
                data-strk-img-id={categoryImages[cat.id].imgId}
                data-strk-img={categoryImages[cat.id].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-espresso/20 group-hover:bg-brand-espresso/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <h3
                  id={cat.titleId}
                  className="font-sans text-xs font-medium tracking-product uppercase text-white"
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
