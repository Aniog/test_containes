import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?type=${cat.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
            >
              <img
                src={PLACEHOLDER}
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/70" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl uppercase tracking-widest3 text-cream"
                >
                  {cat.label}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.label} in 18K gold plated demi-fine jewelry
                </p>
                <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-cream/90 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
