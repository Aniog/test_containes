import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a3f9c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-amber-300 uppercase tracking-[0.3em] text-sm font-light mb-4"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Nature's Perfect Food
        </p>
        <h1
          id="hero-title"
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The World<br />
          <em>of Eggs</em>
        </h1>
        <p
          className="text-white/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          From farm to table — discover the incredible versatility, nutrition,
          and beauty of one of nature's most remarkable foods.
        </p>
        <div className="mt-10">
          <a
            href="#about"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-amber-900 font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Explore
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
