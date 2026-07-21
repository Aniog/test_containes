import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const TILES = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'gold drop earrings and studs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'gold pendant and crystal necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'gold huggie hoop earrings',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        {TILES.map((tile) => (
          <Link key={tile.id} to={tile.to} className="group relative block aspect-[4/5] overflow-hidden bg-cream">
            <img
              alt={tile.name}
              data-strk-img-id={`cat-${tile.id}-img`}
              data-strk-img={`[${tile.descId}] [${tile.titleId}] gold jewelry editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/40" />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <span
                id={tile.titleId}
                className="font-serif text-2xl uppercase tracking-widest3 text-ivory md:text-3xl"
              >
                {tile.name}
              </span>
              <span id={tile.descId} className="sr-only">
                {tile.desc}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
