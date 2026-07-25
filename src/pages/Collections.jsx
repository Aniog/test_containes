import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/section-heading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const COLLECTIONS = [
  {
    id: 'col-gilded-light',
    title: 'Gilded Light',
    blurb: 'Warm gold essentials for every day',
    to: '/shop',
    query: 'collection of delicate gold jewelry pieces arranged on warm beige linen, editorial flat lay, soft morning light',
  },
  {
    id: 'col-evening-heirloom',
    title: 'Evening Heirloom',
    blurb: 'Statement drops for after dark',
    to: '/shop?category=Earrings',
    query: 'dramatic gold statement earrings on black velvet, moody luxury jewelry editorial, candlelight',
  },
  {
    id: 'col-art-of-giving',
    title: 'The Art of Giving',
    blurb: 'Gift-ready sets in signature boxes',
    to: '/shop?category=Sets',
    query: 'stack of cream and gold jewelry gift boxes with ribbon, luxury gifting editorial, warm light',
  },
]

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 sm:pt-20">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
            Velmora
          </p>
          <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            The Collections
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mocha">
            Small, considered edits — each piece chosen to be worn together and
            loved for years.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <SectionHeading eyebrow="Explore" title="Three Ways to Shine" />
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={col.to}
              className="group relative block overflow-hidden bg-ink"
            >
              <div className="aspect-[3/4]">
                <img
                  data-strk-img-id={`${col.id}-img`}
                  data-strk-img={col.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${col.title} collection by Velmora Fine Jewelry`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-75"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[10px] font-semibold uppercase tracking-luxe text-gold">
                  {col.blurb}
                </p>
                <h2 className="mt-1.5 font-serif text-3xl font-medium text-cream">
                  {col.title}
                </h2>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-cream/80 transition-colors group-hover:text-gold">
                  Discover
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
