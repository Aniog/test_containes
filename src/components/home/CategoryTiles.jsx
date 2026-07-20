import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'


export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {categories.map((cat) => {
            const nameId = `cat-name-${cat.id}`
            const descId = `cat-desc-${cat.id}`
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.name}`}
                className="group relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
              >
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${descId}] [${nameId}] gold jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                  <h3
                    id={nameId}
                    className="font-serif text-2xl uppercase tracking-widest2 text-cream md:text-3xl"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={descId}
                    className="mt-2 max-w-xs mx-auto text-sm text-cream/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  >
                    {cat.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
