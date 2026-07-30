import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-bg-d29f4e"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="3x2"
          data-strk-bg-width="1800"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl lg:text-7xl text-cream leading-[1.1] tracking-wide text-balance"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-sm sm:text-base text-cream/80 font-light tracking-wide leading-relaxed max-w-xl mx-auto text-balance"
        >
          Demi-fine gold jewelry designed for the modern woman. 18K gold-plated, hypoallergenic, and made to be worn every day.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-10 py-3.5 bg-gold text-espresso text-xs font-medium tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 rounded-sm"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="w-px h-8 bg-cream/20" />
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
