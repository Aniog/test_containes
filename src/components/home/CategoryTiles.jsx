import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CATEGORIES } from '@/data/products'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import { getStrkImageUrl } from '@/lib/utils'

export default function CategoryTiles() {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-sand"
          >
            <img
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={`cat-tile-${cat.id}-4f2a`}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src={getStrkImageUrl(`cat-tile-${cat.id}-4f2a`)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl uppercase tracking-widest3 text-cream"
              >
                {cat.name}
              </h3>
              <p id={cat.descId} className="sr-only">
                {cat.desc}
              </p>
              <span className="mt-2 inline-block translate-y-2 text-[11px] uppercase tracking-widest2 text-cream/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-cream/90">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
