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
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            {/* Eyebrow */}
            <p className="text-gold text-xs font-sans font-medium uppercase tracking-[0.3em] mb-6">
              New Collection 2026
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] tracking-wide mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-ivory/70 font-light leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to last, made to be worn every day.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-gold text-ivory text-xs font-sans font-medium uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-all duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-ivory/40 text-ivory text-xs font-sans font-medium uppercase tracking-[0.2em] px-10 py-4 hover:border-ivory hover:bg-ivory/10 transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="text-ivory/40 text-[10px] font-sans uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  )
}
