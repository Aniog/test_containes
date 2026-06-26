import { useEffect, useRef } from 'react'
import { ArrowRight, Award, ShieldCheck, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-9x1a2b"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-400">
              Trusted by metal fabricators worldwide
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Precision Metal
            <span className="text-amber-500"> Folding Machines</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl"
          >
            Engineered for accuracy and built to last. Explore our range of
            double folding machines, sheet metal folders, and metal folding
            solutions for every workshop.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition shadow-lg"
            >
              View Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition backdrop-blur-sm"
            >
              Request a Quote
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-slate-200">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
              </div>
              <span className="font-medium">2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <Wrench className="w-6 h-6 text-amber-500" />
              </div>
              <span className="font-medium">Global Support</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <span className="font-medium">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
