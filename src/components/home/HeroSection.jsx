import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a7c3f1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-accent-400 text-sm font-medium">Industry-Leading Precision</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Precision Sheet Metal{' '}
            <span className="text-accent-400">Folding</span>{' '}
            Machines
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-brand-200 max-w-2xl mb-10 leading-relaxed"
          >
            Engineered for perfection. ARTITECT MACHINERY delivers industrial-grade
            double folding machines and sheet metal folders trusted by professionals
            across the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" variant="accent" className="gap-2 w-full sm:w-auto">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">25+</div>
              <div className="text-brand-300 text-sm mt-1">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">5000+</div>
              <div className="text-brand-300 text-sm mt-1">Machines Installed</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">40+</div>
              <div className="text-brand-300 text-sm mt-1">Countries Served</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">99.7%</div>
              <div className="text-brand-300 text-sm mt-1">Precision Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
