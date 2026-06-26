import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Precision Engineering</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Metal Folding
            <br />
            <span className="text-gold">Machines</span> Built
            <br />
            for Precision
          </h1>

          <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Industry-leading double folding machines and sheet metal folders engineered for accuracy, durability, and unmatched performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-3.5 rounded font-semibold tracking-wide transition-colors duration-200"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-3.5 rounded font-semibold tracking-wide transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
