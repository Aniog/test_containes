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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050810]/70 via-[#050810]/50 to-[#050810]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00e5ff] opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.3)] rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase">Explore the Invisible World</span>
        </div>

        <h1
          id="hero-title"
          className="text-7xl md:text-9xl font-black tracking-tight text-white mb-6 leading-none"
          style={{ textShadow: '0 0 60px rgba(0,229,255,0.4)' }}
        >
          Micro
          <span className="text-[#00e5ff]">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-[#8ab4c8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the hidden universe of microscopic life — bacteria, cells, and organisms invisible to the naked eye
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-[#00e5ff] text-[#050810] font-bold rounded-full text-lg hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,229,255,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-[rgba(0,229,255,0.4)] text-[#00e5ff] font-bold rounded-full text-lg hover:bg-[rgba(0,229,255,0.1)] transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#8ab4c8]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00e5ff] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
