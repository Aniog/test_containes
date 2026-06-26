import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-7d3f9a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/80" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <span className="inline-block text-gold text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-6">
          Precision Sheet Metal Folding
        </span>
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6"
        >
          Engineering Strength<br />
          <span className="text-gold">With Every Fold</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ARTITECT MACHINERY builds premium double folding machines, sheet metal folders, and metal folding machines designed for accuracy, durability, and effortless operation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" as="a" href="#products" className="gap-2">
            Explore Machines <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outlineLight" size="lg" as="a" href="#contact">
            Request a Quote
          </Button>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
