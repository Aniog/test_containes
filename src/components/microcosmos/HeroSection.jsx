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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0e]/70 via-[#050a0e]/50 to-[#050a0e]" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00d4c8]/40 text-[#00d4c8] text-sm font-medium tracking-widest uppercase bg-[#00d4c8]/10">
          Explore the Invisible World
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#f0f8ff] mb-6 leading-tight"
        >
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#c8d8e8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens — where bacteria dance, fungi bloom, and life thrives in forms beyond imagination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full bg-[#00d4c8] text-[#050a0e] font-semibold text-base hover:bg-[#00bfb5] transition-colors shadow-[0_0_30px_rgba(0,212,200,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full border border-[#00d4c8]/50 text-[#00d4c8] font-semibold text-base hover:bg-[#00d4c8]/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#6b8fa8]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#6b8fa8] to-transparent" />
      </div>
    </section>
  )
}
