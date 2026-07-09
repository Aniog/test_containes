import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-5">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] mb-5 text-white/90"
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/80 mt-6 max-w-lg leading-relaxed">
          Timeless 18K gold-plated pieces designed for the modern woman. Elegant, affordable, made to last.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-white text-velmora-charcoal px-10 py-4 text-xs uppercase tracking-widest hover:bg-velmora-gold hover:text-white transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}