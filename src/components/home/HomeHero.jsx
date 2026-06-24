import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowDown, Microscope } from 'lucide-react'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-7a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0a0e17]/80" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 z-[1] bg-dot-pattern opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Microscope className="w-8 h-8 text-teal-400" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-teal-400">
            Explore the Unseen
          </span>
        </div>

        <h1
          id="hero-title"
          className="hero-gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-8"
        >
          MicroCosmos
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A hidden universe of tiny organisms surrounds us — from resilient tardigrades to luminous diatoms. Step into a world invisible to the naked eye.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
          >
            Explore the Gallery
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-600 hover:border-teal-400 text-slate-200 hover:text-teal-300 font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 z-10 animate-float">
        <ArrowDown className="w-6 h-6 text-teal-400/60" />
      </div>
    </section>
  )
}
