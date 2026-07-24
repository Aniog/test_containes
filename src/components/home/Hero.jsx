import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useFadeIn } from '@/lib/useFadeIn'

const Hero = () => {
  const containerRef = useRef(null)
  const { ref: fadeRef, visible } = useFadeIn(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-velmora-dark overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-dark/50" />

      <div ref={fadeRef} className={`relative z-10 text-center px-6 md:px-6 max-w-3xl transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 id="hero-title" className="font-serif text-3xl md:text-5xl lg:text-6xl text-velmora-warmWhite tracking-[0.05em] leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-velmora-warmWhite/80 mt-4 md:mt-6 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry in 18K gold — designed for everyday elegance, made to last a lifetime.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 font-sans text-sm tracking-[0.2em] uppercase bg-velmora-gold text-velmora-dark px-10 py-3.5 hover:bg-velmora-goldHover transition-all duration-300 shadow-sm"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
