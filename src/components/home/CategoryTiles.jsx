import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CategoryTiles() {
  const tilesRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, tilesRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={tilesRef} className="bg-velmora-ivory px-5 py-20 text-velmora-espresso md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">Find your ritual</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative overflow-hidden border border-velmora-mist bg-velmora-parchment text-velmora-ivory shadow-sm">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                role="img"
                aria-label={category.label}
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="850"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 transition duration-300 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/80 opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
