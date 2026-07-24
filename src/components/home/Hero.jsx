import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-warm-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-cream tracking-wide-15 leading-tight animate-fade-in-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-warm-cream/80 mt-4 md:mt-6 max-w-xl mx-auto animate-fade-in-up-delay-1"
        >
          Demi-fine gold jewelry designed for everyday elegance. Each piece is crafted with care, made to last, and meant to be worn.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-warm-black font-sans text-sm tracking-wide-15 uppercase px-10 py-3.5 hover:bg-gold-light transition-colors duration-300 animate-fade-in-up-delay-2"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
