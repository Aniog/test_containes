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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-6">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight"
            >
              Crafted to be<br />
              <em className="italic text-champagne-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-ivory/70 mt-6 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows exactly what she wants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-champagne-dark transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-flex items-center justify-center border border-ivory/40 text-ivory font-sans text-xs tracking-widest uppercase font-medium px-10 py-4 hover:border-champagne hover:text-champagne transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory">Scroll</span>
        <div className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
