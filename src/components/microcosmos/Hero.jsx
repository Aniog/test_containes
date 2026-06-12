import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block mb-6 text-xs uppercase tracking-widest text-cyan-400 font-semibold border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 rounded-full">
          The Invisible World
        </span>
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6">
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Journey into the breathtaking universe that exists beyond the naked eye — where single cells dance, bacteria thrive, and life reveals its most intricate secrets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#explore" className="bg-cyan-400 text-[#050d1a] font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors duration-200 text-sm">
            Begin the Journey
          </a>
          <a href="#gallery" className="border border-cyan-400/40 text-cyan-400 font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-400/10 transition-colors duration-200 text-sm">
            View Gallery
          </a>
        </div>
      </div>

      <a href="#explore" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce">
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  )
}
