import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '../../strk-img-config.json'
import { getStrkImageSrc } from '../../lib/strk-image'
import SectionHeader from './SectionHeader'

const tiles = [
  { id: 'earrings', title: 'Earrings', copy: 'Warm gold accents for every face-framing moment.' },
  { id: 'necklaces', title: 'Necklaces', copy: 'Layerable pendants and delicate statement chains.' },
  { id: 'huggies', title: 'Huggies', copy: 'Close-fit shine made for daily wear.' },
]

export default function CategoryTiles() {
  const categoryRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, categoryRef.current)
  }, [])

  return (
    <section ref={categoryRef} className="bg-velmora-ivory px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Shop by category" title="Find Your Signature" id="category-title" align="center">
          Three refined starting points for gifting, collecting, and everyday styling.
        </SectionHeader>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link key={tile.id} to={`/shop?category=${tile.title}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-mist shadow-soft focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-4 focus:ring-offset-velmora-ivory">
              <img
                alt={tile.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${tile.id}-velmora`}
                data-strk-img={`[category-${tile.id}-copy] [category-${tile.id}-title] [category-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={getStrkImageSrc(`category-${tile.id}-velmora`)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-4 transition duration-500 group-hover:translate-y-0">
                <h3 id={`category-${tile.id}-title`} className="font-serif text-4xl text-velmora-cream">
                  {tile.title}
                </h3>
                <p id={`category-${tile.id}-copy`} className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-velmora-mist opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                  {tile.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
