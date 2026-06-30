import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-bg/70 via-velmora-bg/40 to-velmora-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-velmora-cream leading-[1.1] tracking-wide animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-base md:text-lg text-velmora-cream/70 font-light max-w-xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          18K gold-plated jewelry designed for the modern woman. Elegant, hypoallergenic, and made to last.
        </p>
        <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 bg-velmora-gold text-velmora-bg text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-velmora-bg to-transparent z-10" />
    </section>
  )
}
