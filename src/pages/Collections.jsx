import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function Collections() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Curated Edits</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">Collections</h1>
          <p className="mt-4 text-sm text-muted">
            Explore our jewelry by category — each piece hand-finished in 18K gold.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.name}`}
              className="group relative aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                alt={c.name}
                data-strk-img-id={`${c.imgId}-col`}
                data-strk-img={`[${c.descId}] [${c.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h2
                  id={`${c.titleId}-col`}
                  className="font-serif text-3xl uppercase tracking-widest3 text-cream"
                >
                  {c.name}
                </h2>
                <p id={`${c.descId}-col`} className="sr-only">
                  {c.desc}
                </p>
                <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-cream/80">
                  Discover →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
