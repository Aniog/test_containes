import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#2C2824' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-base md:text-lg text-cream/80 font-light max-w-lg"
          >
            Demi-fine gold jewelry designed for everyday elegance. Each piece, a keepsake.
          </p>
          <Link to="/shop" className="btn-primary inline-block mt-8">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}