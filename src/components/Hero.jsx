import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-stone-900"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry luxury warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <p id="hero-subtitle" className="text-gold-light text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in">
            New Collection 2026
          </p>
          <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-[1.1] animate-slide-up">
            Crafted to be
            <br />
            <span className="font-medium italic">Treasured</span>
          </h1>
          <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed max-w-md animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Premium demi-fine jewelry designed for the modern woman. 18K gold plated,
            hypoallergenic, and crafted to last.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-ivory/30 text-ivory text-sm font-medium tracking-wider uppercase hover:bg-ivory/10 transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-ivory/40" />
      </div>
    </section>
  )
}
