import React, { useEffect, useRef } from 'react'
import { ArrowRight, Settings2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden isolate" id="hero">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center"
        data-strk-bg-id="hero-bg-artitect-01"
        data-strk-bg="[hero-title] [hero-subtitle] industrial machinery metal folding factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 z-0 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 lg:py-48">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-amber-500 font-medium text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
            <Settings2 className="w-4 h-4" />
            <span>Precision Engineering</span>
          </div>
          
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Next Generation <br/>
            <span className="text-amber-500">Metal Folding</span>
          </h1>
          
          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Experience the elegant power of ARTITECT double folding machines. Designed for maximum efficiency, pinpoint accuracy, and user-friendly operation in demanding industrial environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-lg shadow-amber-500/20">
              Explore Machines
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
