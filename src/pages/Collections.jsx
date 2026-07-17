import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

const COLLECTIONS = [
  {
    id: 'everyday-glow',
    name: 'Everyday Glow',
    description:
      'The pieces you forget you\'re wearing — until the light catches them and someone asks.',
    image: 'gold huggie earrings and pendant necklace styled on linen editorial',
    items: 4,
  },
  {
    id: 'gift-edit',
    name: 'The Gift Edit',
    description:
      'Curated sets, hand-tied ribbons, and the kind of packaging people keep on the dresser.',
    image: 'gold jewelry gift set in velvet box elegant editorial warm light',
    items: 2,
  },
  {
    id: 'layers-and-light',
    name: 'Layers & Light',
    description:
      'Necklaces designed to layer — the kind of small, considered stack you build over years.',
    image: 'layered gold necklaces on woman editorial portrait soft light',
    items: 3,
  },
]

export default function Collections() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20 text-center">
        <p className="eyebrow">Collections</p>
        <h1 className="mt-5 font-serif text-4xl md:text-6xl text-espresso font-light tracking-tight leading-[1.05]">
          Three ways to <em className="italic">wear it</em>.
        </h1>
        <p className="mt-7 text-espresso/75 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Curated edits built around the way you actually wear jewelry — at
          the office, on the weekend, or for the people you love.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 space-y-12 md:space-y-16">
        {COLLECTIONS.map((col, idx) => (
          <Link
            key={col.id}
            to={`/shop`}
            className="group block relative"
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
                idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="md:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <img
                    alt={col.name}
                    data-strk-img-id={`collection-${col.id}`}
                    data-strk-img={`${col.image} [collection-${col.id}-name] [collections-title]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="1400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow">{col.items} pieces</p>
                <h2
                  id={`collection-${col.id}-name`}
                  className="mt-4 font-serif text-3xl md:text-4xl text-espresso font-light tracking-tight leading-tight"
                >
                  {col.name}
                </h2>
                <p className="mt-5 text-[15px] text-espresso/75 font-light leading-relaxed max-w-md">
                  {col.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-link">
                  Shop the edit <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
