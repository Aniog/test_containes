import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToProducts = (e) => {
    e.preventDefault()
    const el = document.querySelector('#products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/90 to-navy-900/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
          <span className="text-gold-500 text-sm font-medium tracking-wide">
            Precision Engineering Since 1998
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Master the Art of
          <br />
          <span className="text-gold-500">Metal Folding</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Industry-leading double folding machines and sheet metal folders
          engineered for precision, durability, and effortless operation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={scrollToProducts}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-lg transition-all duration-200 flex items-center gap-2 text-base"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="border-2 border-white/30 hover:border-gold-500 text-white hover:text-gold-500 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-base"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '5000+', label: 'Machines Delivered' },
            { value: '60+', label: 'Countries Served' },
            { value: '99.8%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold-500">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#products"
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
