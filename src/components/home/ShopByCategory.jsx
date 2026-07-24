import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function ShopByCategory() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <img
                alt={c.name}
                data-strk-img-id={c.imgId}
                data-strk-img={`[${c.descId}] [${c.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3
                  id={c.titleId}
                  className="font-serif text-2xl uppercase tracking-widest3 text-cream"
                >
                  {c.name}
                </h3>
                <p id={c.descId} className="sr-only">
                  {c.desc}
                </p>
                <span className="mt-2 inline-block text-[11px] uppercase tracking-widest2 text-cream/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
