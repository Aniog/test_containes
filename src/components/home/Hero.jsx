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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-espresso/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl animate-slide-up">
        <h1
          id="hero-title"
          className="font-serif text-display md:text-6xl lg:text-7xl text-white font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 font-sans text-sm md:text-base text-white/80 tracking-wide max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable.
        </p>
        <Link to="/shop" className="btn-primary inline-block mt-8">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
