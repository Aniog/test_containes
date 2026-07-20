import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-heading] [hero-subheading]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-dark-900"
      >
        {/* Fallback gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-dark-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-dark-900/10" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-lg">
          <span className="inline-block text-gold-400 text-xs tracking-widest uppercase mb-4 font-medium">
            New Collection
          </span>
          <h1
            id="hero-heading"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subheading"
            className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            Demi-fine gold jewelry, handcrafted for the woman who values quiet luxury and enduring beauty.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold-500 text-dark-900 text-xs tracking-widest uppercase font-medium hover:bg-gold-400 transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}