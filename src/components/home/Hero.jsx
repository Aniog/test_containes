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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-surface-dark"
        data-strk-bg-id="hero-bg-velmora-q8w9e0"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light leading-[1.1] mb-4"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/80 text-base md:text-lg mb-8 max-w-md"
          >
            Demi-fine gold jewelry designed for the moments that matter most.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-accent text-white px-8 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
