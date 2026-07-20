import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ShopByCategory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => {
            const titleId = `cat-${cat.id}-title`
            const descId = `cat-${cat.id}-desc`
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-sand"
              >
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${descId}] [${titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                  <h3
                    id={titleId}
                    className="font-serif text-2xl md:text-3xl uppercase tracking-[0.18em] text-ivory"
                  >
                    {cat.name}
                  </h3>
                  <p id={descId} className="sr-only">
                    {cat.desc}
                  </p>
                  <span className="block mt-2 text-[11px] uppercase tracking-[0.2em] text-ivory/80 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Shop Now
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
