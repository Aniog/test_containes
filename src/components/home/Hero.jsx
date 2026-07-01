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
        className="absolute inset-0 bg-velvet"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay — stronger for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet/80 via-velvet/55 to-velvet/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl fade-in-up">
            {/* Eyebrow */}
            <p className="font-sans text-xs uppercase tracking-widest3 text-gold mb-6">
              New Collection — 2026
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6"
              style={{ color: '#F5F0E8' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="font-sans text-sm leading-relaxed mb-10 max-w-sm"
              style={{ color: 'rgba(245,240,232,0.75)' }}
            >
              Demi-fine gold jewelry for the woman who knows what she loves.
              18K gold plated. Hypoallergenic. Made to last.
            </p>

            {/* CTA */}
            <Link
              to="/shop"
              className="inline-block bg-gold text-velvet font-sans text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-cream/40 animate-pulse" />
      </div>
    </section>
  )
}
