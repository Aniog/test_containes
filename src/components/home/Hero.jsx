import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="inline-block mb-6">
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase border border-gold/30 px-5 py-2 rounded-full">
            Precision Engineering
          </span>
        </div>

        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Master the Art of<br />
          <span className="text-gold">Metal Folding</span>
        </h1>

        <p id="hero-subtitle" className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 flex items-center gap-2"
          >
            Explore Products <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
