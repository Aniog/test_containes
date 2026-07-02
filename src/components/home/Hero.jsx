import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-velvet/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-xl">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-4">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-5"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm md:text-base text-cream/80 leading-relaxed mb-8 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-champagne text-velvet font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gilded transition-colors duration-300 font-semibold"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
