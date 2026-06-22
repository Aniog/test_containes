import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 hover:scale-100"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic universe cells bacteria"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 
          id="hero-title"
          className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight"
        >
          The Hidden <br/> <span className="text-emerald-400 font-['Playfair_Display'] italic">Universe</span>
        </h1>
        <p 
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Journey into the MicroCosmos, where the smallest details reveal the grandest wonders of life and matter.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#gallery" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-full font-bold text-lg transition-all transform hover:scale-105">
            View The Wonders
          </a>
          <a href="#about" className="px-8 py-4 bg-slate-100/10 hover:bg-slate-100/20 text-white border border-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-all">
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
