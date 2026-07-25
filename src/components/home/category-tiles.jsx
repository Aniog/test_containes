import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/section-heading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const TILES = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    query: 'elegant gold drop earrings on dark textured stone, luxury jewelry still life, warm light',
    blurb: 'Drops, studs & cuffs',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    query: 'dainty gold pendant necklace on beige silk fabric, luxury jewelry still life, warm light',
    blurb: 'Chains & pendants',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    query: 'small gold huggie hoop earrings arranged on warm neutral ceramic, luxury jewelry still life',
    blurb: 'Everyday hoops',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Explore"
          title="Shop by Category"
        />
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.label}`}
              className="group relative block overflow-hidden bg-ink"
              aria-label={`Shop ${tile.label}`}
            >
              <div className="aspect-[3/4] sm:aspect-[4/5]">
                <img
                  data-strk-img-id={`${tile.id}-img`}
                  data-strk-img={tile.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${tile.label} by Velmora Fine Jewelry`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-75"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-luxe text-gold opacity-0 transition-all duration-500 ease-luxe group-hover:opacity-100">
                  {tile.blurb}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-medium uppercase tracking-[0.12em] text-cream sm:text-3xl">
                    {tile.label}
                  </h3>
                  <span className="text-cream/70 transition-transform duration-500 ease-luxe group-hover:translate-x-1.5 group-hover:text-gold" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
