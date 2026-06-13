import React, { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Cog, Zap } from 'lucide-react'
import Button from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-slate-900"
        data-strk-bg-id="hero-bg-7a3f1e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-600/30">
            <Cog className="w-4 h-4" />
            <span>Precision Sheet Metal Engineering</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Industrial-Grade{' '}
            <span className="text-amber-400">Sheet Metal Folding</span>{' '}
            Machines
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
            ARTITECT MACHINERY delivers precision-engineered double folding machines and metal folders built for demanding industrial applications. Uncompromising quality, exceptional performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="gap-2">
              Explore Products <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              View Catalog
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-sm">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-sm">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Cog className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Global Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}