import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown, Microscope } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-8">
          <Microscope className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Discover the Invisible Universe</span>
        </div>

        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-glow-cyan">
            MicroCosmos
          </span>
        </h1>

        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A breathtaking journey into the microscopic world — where tiny organisms, 
          intricate cells, and hidden structures reveal a universe of beauty beyond the naked eye.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Explore Gallery
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 border border-slate-500 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View Categories
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 z-20 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  )
}