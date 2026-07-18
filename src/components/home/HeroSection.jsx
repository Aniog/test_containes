import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-velvet-950/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-velvet-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-cream-50 leading-[1.1] mb-5"
          >
            Crafted to be{' '}
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream-50/80 text-base md:text-lg font-sans font-light leading-relaxed mb-8 max-w-md"
          >
            Demi-fine gold jewelry designed for the everyday extraordinary. 
            Pieces that feel like heirlooms from the very first wear.
          </p>
          <Link to="/shop" className="btn-outline-light">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-cream-50/50">
          <span className="text-[10px] font-sans tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-cream-50/30 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
