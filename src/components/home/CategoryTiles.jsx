import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const TILES = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=Earrings',
    desc: 'Sculptural cuffs, drops, and huggies in warm gold',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=Necklaces',
    desc: 'Delicate chains and crystal blooms for the collarbone',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=Huggies',
    desc: 'Polished dome huggies that hug the lobe closely',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <img
                alt={tile.name}
                data-strk-img-id={`cat-${tile.id}-img`}
                data-strk-img={`[cat-desc-${tile.id}] [cat-name-${tile.id}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={`cat-name-${tile.id}`}
                  className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-wider"
                >
                  {tile.name}
                </h3>
                <p
                  id={`cat-desc-${tile.id}`}
                  className="sr-only"
                >
                  {tile.desc}
                </p>
                <span className="mt-3 text-cream text-xs uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
