import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const TILES = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    desc: 'Drops, studs & cuffs',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-earrings-img-4a1',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    desc: 'Pendants & chains',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-necklaces-img-7b2',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    desc: 'Everyday essentials',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-huggies-img-9c3',
  },
]

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

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
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="container-velmora">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Find Your Piece</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                alt={tile.name}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}] gold jewelry editorial warm`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl tracking-wide"
                >
                  {tile.name}
                </h3>
                <p
                  id={tile.descId}
                  className="text-xs uppercase tracking-widest2 text-cream/75 mt-2"
                >
                  {tile.desc}
                </p>
                <span className="inline-block mt-4 text-[11px] uppercase tracking-widest2 text-champagne border-b border-champagne pb-0.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
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
