import { useEffect, useRef } from 'react'
import { ArrowRight, Award, Shield, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            Industry-Leading Precision Machinery
          </div>

          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Precision Metal
            <br />
            <span className="text-amber-500">Folding Machines</span>
          </h1>

          <p id="hero-subtitle" className="mt-6 text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed">
            Industrial-grade double folding machines and sheet metal folders engineered for accuracy, durability, and seamless operation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, label: 'ISO 9001 Certified' },
              { icon: Wrench, label: 'German Engineering' },
              { icon: Award, label: '10-Year Warranty' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
