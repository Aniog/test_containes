import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc7x9a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.4 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/30 to-midnight z-[1]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-cyan/10 border border-cyan/30">
            <Microscope className="w-12 h-12 text-cyan" />
          </div>
        </div>
        <h1
          id="hero-title"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan via-violet to-emerald bg-clip-text text-transparent mb-6"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light"
        >
          Discover the breathtaking beauty hidden in the microscopic world — where cells, organisms, and structures reveal nature's most extraordinary artistry.
        </p>
        <a
          href="#explore"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyan/10 border border-cyan/40 text-cyan rounded-full font-medium hover:bg-cyan/20 transition-all duration-300"
        >
          Explore the Invisible
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
