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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold mb-6 animate-fadeIn">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-[1.05] mb-6 animate-fadeIn"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm text-ivory/70 tracking-wide mb-10 max-w-sm mx-auto animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          18K gold plated jewelry for the woman who wears her story
        </p>
        <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-gold text-obsidian font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-inter text-[9px] uppercase tracking-widest text-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-ivory/20" />
      </div>
    </section>
  )
}
