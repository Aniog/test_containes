import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background with stock image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900 z-[1]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] z-[1]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <span className="inline-block text-amber-500 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 md:mb-6">
          Precision Engineering Since 2005
        </span>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          ARTITECT
          <span className="block text-amber-500">MACHINERY</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Premium double folding machines and sheet metal equipment engineered for precision, built for industry, and designed for performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="group px-8 py-3.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-amber-600 hover:text-white transition-all duration-300 text-sm md:text-base"
          >
            Request a Quote
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto border-t border-slate-700/50 pt-8 md:pt-10">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  )
}
