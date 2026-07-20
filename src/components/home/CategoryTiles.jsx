import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[4x5] overflow-hidden bg-espresso"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-${cat.id}-desc] [cat-${cat.id}-name] gold jewelry editorial warm`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-opacity duration-500 group-hover:from-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-ivory text-2xl md:text-3xl uppercase tracking-widest3"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="text-xs text-ivory/0 group-hover:text-ivory/80 transition-all duration-500 mt-2 uppercase tracking-widest2"
                >
                  {cat.description}
                </p>
                <span className="inline-block mt-3 text-[11px] uppercase tracking-widest2 text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
