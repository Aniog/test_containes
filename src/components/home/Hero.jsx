import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[#2A2018]"
        data-strk-bg-id="hero-bg-velmora-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed"
          >
            Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3.5 bg-accent text-white text-sm font-medium uppercase tracking-product rounded-sm hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
