import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl text-ivory tracking-wide"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-2 font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/80"
                >
                  {cat.description}
                </p>
                <span className="mt-5 font-sans text-[10px] uppercase tracking-[0.25em] text-ivory border-b border-ivory/60 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
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
