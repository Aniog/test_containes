import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-9f3a2d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-900 via-transparent to-brand-900/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-accent-300 text-sm font-medium tracking-wide">
              Precision Engineering Since 2003
            </span>
          </div>

          {/* Title */}
          <h1 id="hero-title" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08]">
            Industrial-Grade{' '}
            <span className="text-accent-400">Sheet Metal</span>{' '}
            Folding Machines
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-lg sm:text-xl text-steel-300 max-w-xl mb-10 leading-relaxed">
            ARTITECT MACHINERY delivers double folding machines built for accuracy, speed, and
            decades of reliable operation. Trusted by metal fabrication professionals worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-brand-900 font-semibold rounded-sm hover:bg-accent-400 transition-all group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-steel-600 text-steel-200 font-medium rounded-sm hover:border-steel-400 hover:text-white transition-all group"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="font-display text-3xl font-bold text-white">20+</div>
              <div className="text-sm text-steel-400 mt-1">Years of Excellence</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">5K+</div>
              <div className="text-sm text-steel-400 mt-1">Machines Installed</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">40+</div>
              <div className="text-sm text-steel-400 mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-900 to-transparent z-10" />
    </section>
  )
}
