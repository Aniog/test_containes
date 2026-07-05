import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const timer = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-transform duration-[20s] ease-linear scale-105"
        style={loaded ? { transform: 'scale(1)' } : {}}
        data-strk-bg-id="hero-bg-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className={`font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className={`mt-4 md:mt-6 text-sm md:text-base text-white/80 font-light max-w-lg tracking-wide transition-all duration-1000 ease-out delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Demi-fine gold jewelry for the moments that matter
        </p>
        <Link
          to="/shop"
          className={`mt-8 md:mt-10 bg-velmora-gold text-white text-xs font-medium uppercase tracking-wider px-10 py-3.5 hover:bg-velmora-gold-hover transition-all duration-300 btn-press ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: loaded ? '400ms' : '0ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-10 bg-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  )
}

export default Hero
