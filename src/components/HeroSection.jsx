import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleScroll = (e) => {
    e.preventDefault()
    const el = document.querySelector('#products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B0F19]/70 via-[#0B0F19]/50 to-[#0B0F19]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8 text-center pt-20">
        <span
          id="hero-subtitle"
          className="inline-block text-[#C9A45C] text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-6"
        >
          Precision Engineering Since 1995
        </span>
        <h1
          id="hero-title"
          className="text-[#F5F5F5] text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
        >
          ARTITECT MACHINERY
        </h1>
        <p className="text-[#9BA3AF] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Industry-leading sheet metal folding machines engineered for precision,
          built for durability, and designed to elevate your production capacity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={handleScroll}
            className="bg-[#C9A45C] hover:bg-[#D4B76A] text-[#0B0F19] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0B0F19] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#9BA3AF] hover:text-[#C9A45C] transition-colors duration-200 animate-bounce"
        aria-label="Scroll to products"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
