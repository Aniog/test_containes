import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
      />
      <div className="absolute inset-0 bg-espresso/40" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm uppercase tracking-[0.22em] text-cream/80 mb-5"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1]"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-base md:text-lg text-cream/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
          Timeless pieces designed for the everyday. Warm gold, delicate forms,
          and a quiet kind of luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-espresso px-10 py-4 text-xs uppercase tracking-[0.18em] font-sans hover:bg-soft-gold transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
