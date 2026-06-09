import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Shield, Award, Zap } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-7a3b2c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-dark/70 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/80 z-[1]" />

      <div className="relative z-10 container-wide pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-medium uppercase tracking-widest">
              Precision Engineering
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-white mb-6 leading-[1.05]"
          >
            Professional{' '}
            <span className="text-brand-gold">Sheet Metal</span>{' '}
            Folding Machines
          </h1>

          <p
            id="hero-subtitle"
            className="text-brand-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            High-performance double folding machines, double folders, and metal folding equipment engineered for precision and built to last. Trusted by manufacturers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#products" className="btn-primary group">
              Explore Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Request Quote
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { icon: Shield, label: 'ISO Certified', desc: 'Quality assured' },
              { icon: Award, label: '30+ Years', desc: 'Industry experience' },
              { icon: Zap, label: 'Global Support', desc: '24/7 assistance' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-brand-muted text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
