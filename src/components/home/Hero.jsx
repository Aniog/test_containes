import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Zap, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '27+', label: 'Years of Excellence' },
  { value: '12K+', label: 'Machines Delivered' },
  { value: '45', label: 'Countries Served' },
  { value: '99.7%', label: 'Uptime Reliability' },
]

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-brand-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-main-7a3f2e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/40" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-accent-400 text-sm font-medium">Industry-Leading Precision</span>
            </div>

            <h1
              id="hero-title"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Precision{' '}
              <span className="text-accent-400">Metal Folding</span>{' '}
              Machines
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg sm:text-xl text-brand-300 leading-relaxed max-w-xl mb-10"
            >
              Engineered for perfection. Our double folding machines and sheet metal folders deliver 
              unmatched accuracy, speed, and reliability for every industrial application.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-sm transition-all hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-600 hover:border-brand-400 text-white font-semibold rounded-sm transition-all hover:bg-brand-900/50"
              >
                Request a Demo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-brand-400 text-sm">
                <Shield size={16} className="text-accent-500" />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-brand-400 text-sm">
                <Zap size={16} className="text-accent-500" />
                <span>CE Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-brand-400 text-sm">
                <Award size={16} className="text-accent-500" />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-brand-950/50">
              <img
                data-strk-img-id="hero-product-main-f8a2c1"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Double Folding Machine"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-900 border border-brand-700 px-6 py-4 rounded-sm shadow-xl">
              <p className="text-accent-400 font-display text-2xl font-bold">99.7%</p>
              <p className="text-brand-400 text-xs uppercase tracking-wider">Precision Rate</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-10 border-t border-brand-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-brand-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
