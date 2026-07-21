import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import useStockImages from '@/lib/useStockImages'

export default function Hero() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit gold jewelry on model"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#3A2D1F' }}
      />

      {/* Warm gradient overlay so the serif text reads */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-x pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-2xl">
          <p className="eyebrow-gold text-[11px] mb-5">
            New Collection · Autumn Edit
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
            style={{ fontWeight: 400 }}
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">treasured.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/80 text-base md:text-lg max-w-md font-light leading-relaxed"
          >
            Demi-fine gold jewelry, hand-finished in small batches. Made for
            the everyday, designed to last.
          </p>
          <div className="mt-9 flex items-center gap-4 flex-wrap">
            <Link to="/shop" className="btn-primary-on-dark group">
              Shop the Collection
              <ArrowRight
                className="w-4 h-4 ml-3 -mr-1 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/about"
              className="btn-ghost-on-dark"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute right-6 md:right-10 bottom-10 hidden md:flex flex-col items-center gap-3 text-cream/50 z-10">
        <span className="eyebrow-gold rotate-90 origin-center mb-12">scroll</span>
        <span className="w-px h-12 bg-cream/30" />
      </div>
    </section>
  )
}
