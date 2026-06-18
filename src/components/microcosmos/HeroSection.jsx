import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4" id="hero-label">
          The Invisible World Revealed
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Welcome to the <br />
          <span className="text-teal-400">MicroCosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Dive into the breathtaking universe hidden beneath the naked eye — where microscopic organisms, cells, and crystals form worlds of extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#explore" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-full transition text-base">
            Start Exploring
          </a>
          <a href="#gallery" className="border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-4 rounded-full transition text-base font-semibold">
            View Gallery
          </a>
        </div>
      </div>

      <a href="#explore" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-teal-400 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
