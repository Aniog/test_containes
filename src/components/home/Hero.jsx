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
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay — strong enough for cream text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-velmora-obsidian/70 via-velmora-obsidian/55 to-velmora-obsidian/75" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto" style={{ color: '#FAF7F2' }}>
        <p
          id="hero-eyebrow"
          className="font-manrope text-[10px] tracking-[0.35em] uppercase mb-6 animate-fadeIn"
          style={{ animationDelay: '0.1s', color: '#C9A96E' }}
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-wide mb-6 animate-fadeIn"
          style={{ animationDelay: '0.25s', color: '#FAF7F2' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-manrope text-sm leading-relaxed mb-10 max-w-md mx-auto animate-fadeIn"
          style={{ animationDelay: '0.4s', color: 'rgba(250,247,242,0.80)' }}
        >
          Demi-fine gold jewelry for the woman who moves through the world with intention. Worn daily, gifted with love.
        </p>
        <div className="animate-fadeIn" style={{ animationDelay: '0.55s' }}>
          <Link
            to="/shop"
            className="inline-block font-manrope text-[10px] tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300 font-medium"
            style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFC08A'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <span className="font-manrope text-[9px] tracking-[0.25em] uppercase" style={{ color: 'rgba(250,247,242,0.50)' }}>Scroll</span>
        <div className="w-px h-8 bg-velmora-gold/40" />
      </div>
    </section>
  )
}
