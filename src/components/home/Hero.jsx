import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Hero = () => {
  const containerRef = useRef(null)
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-charcoal"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div ref={revealRef} className={`relative z-10 text-center px-4 max-w-2xl transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 id="hero-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-4">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-white/80 tracking-cta uppercase mb-8">
          Demi-fine jewelry in 18K gold — made for everyday
        </p>
        <Link to="/shop">
          <Button className="bg-gold hover:bg-gold-hover text-white px-8 py-3 text-sm tracking-cta uppercase font-sans font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal">
            Shop the Collection
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
